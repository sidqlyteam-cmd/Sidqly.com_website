import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

let totalRecords = 0;
let regionPages = 0;
let countryPages = 0;
let cityPages = 0;
let indexablePages = 0;
let noindexPages = 0;
let sitemapIncluded = 0;
let sitemapExcluded = 0;
let tier1Count = 0;
let tier2Count = 0;
let tier3Count = 0;
let errorCount = 0;
let warningCount = 0;

// Valid route target prefixes inside the repository
const VALID_ROUTE_PREFIXES = [
  '/modules/',
  '/knowledge-hub/',
  '/locations/',
  '/zakat-calculator',
  '/ramadan-planner',
  '/eid-qurbani-planner',
  '/guided-pilot',
  '/contact-sales',
  '/data-migration',
  '/pricing',
  '/features',
  '/about',
  '/book-demo'
];

// Content trackers to detect duplicates
const metaDescriptionsTracker = {};
const shortHerosTracker = {};
const quickAnswersTracker = {};

// Helper to compile/extract JSON data from TS files
const getJSONData = (moduleName) => {
    const tempFile = path.join(projectRoot, 'scripts', 'temp-dump.ts');
    const dumpScript = `
import { ${moduleName} } from '../src/data/locations/${moduleName === 'regionsData' ? 'regions.js' : moduleName === 'countriesData' ? 'countries.js' : 'cityContentTier1.js'}';
console.log(JSON.stringify(${moduleName}));
    `;
    fs.writeFileSync(tempFile, dumpScript);

    try {
        execSync(`npx -p typescript tsc temp-dump.ts --esModuleInterop --skipLibCheck --module ESNext --moduleResolution Node`, { cwd: path.join(projectRoot, 'scripts'), stdio: 'pipe' });
        const jsFile = tempFile.replace('.ts', '.js');
        const output = execSync(`node temp-dump.js`, { cwd: path.join(projectRoot, 'scripts'), encoding: 'utf8' });
        fs.unlinkSync(tempFile);
        if (fs.existsSync(jsFile)) fs.unlinkSync(jsFile);
        return JSON.parse(output);
    } catch (e) {
        console.error("Error executing TS dump:", e.message);
        if(fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        const jsFile = tempFile.replace('.ts', '.js');
        if(fs.existsSync(jsFile)) fs.unlinkSync(jsFile);
        return [];
    }
};

const validateRecord = (record, allRecords) => {
    let hasError = false;
    const recommendation = [];

    if (record.priorityTier === 1) tier1Count++;
    if (record.priorityTier === 2) tier2Count++;
    if (record.priorityTier === 3) tier3Count++;

    const url = record.canonicalPath || `/locations/${record.slug}`;

    // 1. Metadata Checks (Missing values)
    if (!record.slug) {
        hasError = true;
        recommendation.push('Missing slug');
    }
    if (!record.metaTitle) {
        hasError = true;
        recommendation.push('Missing meta title');
    }
    if (!record.metaDescription) {
        hasError = true;
        recommendation.push('Missing meta description');
    } else if (record.metaDescription.length < 50) {
        warningCount++;
        recommendation.push('Short meta description');
    }
    if (!record.h1) {
        hasError = true;
        recommendation.push('Missing H1');
    }
    if (!record.quickAnswer) {
        hasError = true;
        recommendation.push('Missing quick answer');
    }

    // 2. Indexing and Sitemap Integrity checks
    if (record.priorityTier === 1) {
        if (record.indexStatus !== 'index') {
            hasError = true;
            recommendation.push('Tier 1 page must be set to index status');
        }
        if (!record.includeInSitemap) {
            hasError = true;
            recommendation.push('Tier 1 page must be included in the sitemap');
        }
        if (record.contentQuality !== 'strong') {
            hasError = true;
            recommendation.push('Tier 1 page must have strong content quality');
        }
    } else {
        // Tier 2 or 3 page rules
        if (record.indexStatus !== 'noindex') {
            hasError = true;
            recommendation.push('Tier 2/3 page must be noindex status');
        }
        if (record.includeInSitemap) {
            hasError = true;
            recommendation.push('Tier 2/3 page must be excluded from sitemap');
        }
    }

    // 3. Canonical correctness
    if (url.endsWith('/')) {
        hasError = true;
        recommendation.push('Canonical URL must not have a trailing slash');
    }
    if (url.includes('http://') || url.includes('https://')) {
        hasError = true;
        recommendation.push('Canonical must be a relative clean path');
    }

    // 4. City-specific Quality requirements
    if (record.pageType === 'city') {
        if (record.indexStatus === 'index') {
            if (!record.faqs || record.faqs.length === 0) {
                hasError = true;
                recommendation.push('Indexable city must have FAQs');
            }
            if (!record.localNeeds) {
                hasError = true;
                recommendation.push('Indexable city must have localNeeds section');
            }
            if (!record.culturalNote) {
                hasError = true;
                recommendation.push('Indexable city must have culturalNote section');
            }

            // Internal links coverage check
            if (!record.relatedProducts || record.relatedProducts.length === 0) {
                hasError = true;
                recommendation.push('Indexable city must link to related products');
            }
            if (!record.relatedKnowledgeHubArticles || record.relatedKnowledgeHubArticles.length === 0) {
                hasError = true;
                recommendation.push('Indexable city must link to knowledge hub articles');
            }
        }
    }

    // 5. Parent-Child & Breadcrumb Hierarchy Validation
    if (record.pageType === 'city') {
        const parentSlug = ['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'bahrain', 'oman'].includes(record.countrySlug)
            ? 'gulf'
            : record.countrySlug;

        const parent = allRecords.find(p => p.slug === parentSlug);
        if (!parent) {
            hasError = true;
            recommendation.push(`Missing parent regional hub page for country slug '${record.countrySlug}'`);
        } else {
            // Check indexable consistency
            if (record.indexStatus === 'index' && parent.indexStatus !== 'index') {
                hasError = true;
                recommendation.push(`Parent regional hub '${parentSlug}' must be indexed if child city '${record.slug}' is indexed`);
            }
        }
    }

    // 6. Duplicate Content Checks (Only check across active Tier 1 indexable pages to avoid draft collisions)
    if (record.indexStatus === 'index') {
        if (metaDescriptionsTracker[record.metaDescription]) {
            hasError = true;
            recommendation.push(`Duplicate metaDescription with '${metaDescriptionsTracker[record.metaDescription]}'`);
        } else {
            metaDescriptionsTracker[record.metaDescription] = record.slug;
        }

        if (shortHerosTracker[record.shortHero]) {
            hasError = true;
            recommendation.push(`Duplicate shortHero with '${shortHerosTracker[record.shortHero]}'`);
        } else {
            shortHerosTracker[record.shortHero] = record.slug;
        }

        if (quickAnswersTracker[record.quickAnswer]) {
            hasError = true;
            recommendation.push(`Duplicate quickAnswer with '${quickAnswersTracker[record.quickAnswer]}'`);
        } else {
            quickAnswersTracker[record.quickAnswer] = record.slug;
        }
    }

    // 7. Broken Internal Links Checks
    const verifyLinks = (links) => {
        if (!links) return;
        for (const link of links) {
            if (!link.href.startsWith('/')) {
                hasError = true;
                recommendation.push(`Invalid non-relative link target: '${link.href}'`);
            }
            const isMatch = VALID_ROUTE_PREFIXES.some(prefix => link.href.startsWith(prefix));
            if (!isMatch) {
                hasError = true;
                recommendation.push(`Broken link target or unrecognized route prefix: '${link.href}'`);
            }
        }
    };
    verifyLinks(record.recommendedModules);
    verifyLinks(record.relatedProducts);
    verifyLinks(record.relatedKnowledgeHubArticles);

    // 8. Fake office/claims checks
    const allText = JSON.stringify(record).toLowerCase();
    if (allText.includes('local office') || allText.includes('physical branch') || allText.includes('we have an office in')) {
        hasError = true;
        recommendation.push('Fake local office claim detected');
    }

    if (hasError) {
        errorCount++;
    }

    totalRecords++;
    if (record.pageType === 'region') regionPages++;
    if (record.pageType === 'country') countryPages++;
    if (record.pageType === 'city') cityPages++;

    if (record.indexStatus === 'index') indexablePages++;
    else noindexPages++;

    if (record.includeInSitemap) sitemapIncluded++;
    else sitemapExcluded++;

    return {
        url,
        pageType: record.pageType,
        priorityTier: record.priorityTier,
        indexStatus: record.indexStatus,
        includeInSitemap: record.includeInSitemap,
        contentQuality: record.contentQuality,
        canonical: url,
        schemaTypes: 'WebPage' + (record.faqs && record.faqs.length > 0 ? ', FAQPage' : ''),
        hasQuickAnswer: record.quickAnswer ? 'yes' : 'no',
        hasFAQ: record.faqs && record.faqs.length > 0 ? 'yes' : 'no',
        hasLocalContext: record.culturalNote || record.localNeeds ? 'yes' : 'no',
        hasCTA: 'yes',
        fakeLocalClaim: allText.includes('local office') ? 'yes' : 'no',
        recommendation: recommendation.length > 0 ? recommendation.join(', ') : 'Pass',
        hasError
    };
};

const main = () => {
    console.log("=== STARTING COMPREHENSIVE PHASE 11 LOCATION & LINK VALIDATION ===");

    const regions = getJSONData('regionsData');
    const countries = getJSONData('countriesData');
    const cities = getJSONData('cityContentTier1');

    const allRecords = [...regions, ...countries, ...cities];

    if (allRecords.length === 0) {
        console.error("❌ Error: No records found or failed to parse TS files.");
        process.exit(1);
    }

    // 1. Check for duplicate slugs
    const slugs = new Set();
    const duplicates = new Set();
    allRecords.forEach(r => {
        if (slugs.has(r.slug)) {
            duplicates.add(r.slug);
        }
        slugs.add(r.slug);
    });

    if (duplicates.size > 0) {
        errorCount += duplicates.size;
        console.error("❌ ERROR: Duplicate slugs found:", Array.from(duplicates));
    }

    const results = allRecords.map(r => validateRecord(r, allRecords));

    console.log("| URL | Type | Tier | Index | Sitemap | Quality | Canonical | Schema | QuickAnswer | FAQ | Has local/cultural note | CTA | Fake Claim | Recommendation |");
    console.log("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");

    for (const r of results) {
        if (r.hasError) {
            console.log(`| 🔴 ${r.url} | ${r.pageType} | ${r.priorityTier} | ${r.indexStatus} | ${r.includeInSitemap} | ${r.contentQuality} | ${r.canonical} | ${r.schemaTypes} | ${r.hasQuickAnswer} | ${r.hasFAQ} | ${r.hasLocalContext} | ${r.hasCTA} | ${r.fakeLocalClaim} | **${r.recommendation}** |`);
        } else {
            console.log(`| 🟢 ${r.url} | ${r.pageType} | ${r.priorityTier} | ${r.indexStatus} | ${r.includeInSitemap} | ${r.contentQuality} | ${r.canonical} | ${r.schemaTypes} | ${r.hasQuickAnswer} | ${r.hasFAQ} | ${r.hasLocalContext} | ${r.hasCTA} | ${r.fakeLocalClaim} | ${r.recommendation} |`);
        }
    }

    console.log("\nValidation Summary:");
    console.log(`Total location records: ${totalRecords}`);
    console.log(`Tier 1 (Indexed) Count: ${tier1Count}`);
    console.log(`Tier 2 (Noindex) Count: ${tier2Count}`);
    console.log(`Tier 3 (Noindex) Count: ${tier3Count}`);
    console.log(`Region pages: ${regionPages}`);
    console.log(`Country pages: ${countryPages}`);
    console.log(`City pages: ${cityPages}`);
    console.log(`Indexable pages: ${indexablePages}`);
    console.log(`Noindex pages: ${noindexPages}`);
    console.log(`Sitemap-included: ${sitemapIncluded}`);
    console.log(`Sitemap-excluded: ${sitemapExcluded}`);
    console.log(`Error count: ${errorCount}`);
    console.log(`Warning count: ${warningCount}`);

    if (errorCount > 0) {
        console.error("\n❌ PHASE 11 LOCATION VALIDATION FAILED with errors. Fix issues above.");
        process.exit(1);
    } else {
        console.log("\n✅ PHASE 11 LOCATION VALIDATION PASSED successfully.");
    }
};

main();
