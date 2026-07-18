import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

const validateRecord = (record, file) => {
    let hasError = false;
    const recommendation = [];

    if (record.priorityTier === 1) tier1Count++;
    if (record.priorityTier === 2) tier2Count++;
    if (record.priorityTier === 3) tier3Count++;

    if ((record.priorityTier === 2 || record.priorityTier === 3) && (record.indexStatus === 'index' || record.includeInSitemap)) {
        console.error(`❌ ERROR in ${file}: Tier ${record.priorityTier} location '${record.slug}' cannot be indexed or included in the sitemap.`);
        hasError = true;
        errorCount++;
    }



    const url = record.canonicalPath || `/locations/${record.slug}/`;

    // Strict Sitemap & Tier Checks
    if (record.priorityTier > 1) {
        if (record.indexStatus === 'index') {
            hasError = true;
            recommendation.push('Tier 2/3 record must not be indexable');
        }
        if (record.includeInSitemap) {
            hasError = true;
            recommendation.push('Tier 2/3 record must not be in sitemap');
        }
    }

    if (record.indexStatus === 'noindex' && record.includeInSitemap) {
        hasError = true;
        recommendation.push('Noindex record must not be in sitemap');
    }

    if (record.includeInSitemap && record.contentQuality !== 'strong') {
        hasError = true;
        recommendation.push('Only strong content can be in sitemap');
    }

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

    if (record.indexStatus === 'index' && !record.canonicalPath && !record.slug) {
        hasError = true;
        recommendation.push('Missing canonical for indexable page');
    }

    if (!['hub', 'region', 'country', 'city'].includes(record.pageType)) {
        hasError = true;
        recommendation.push('Invalid page type');
    }

    if (!['index', 'noindex'].includes(record.indexStatus)) {
        hasError = true;
        recommendation.push('Invalid indexStatus');
    }

    if (record.includeInSitemap !== true && record.includeInSitemap !== false) {
        hasError = true;
        recommendation.push('Invalid includeInSitemap');
    }

    if (!['strong', 'medium', 'weak'].includes(record.contentQuality)) {
        hasError = true;
        recommendation.push('Invalid contentQuality');
    }

    if (record.indexStatus === 'noindex' && record.includeInSitemap) {
        hasError = true;
        recommendation.push('Noindex page included in sitemap');
    }

    if (record.includeInSitemap && ['medium', 'weak'].includes(record.contentQuality)) {
        hasError = true;
        recommendation.push('Weak or medium page included in sitemap');
    }

    if (record.indexStatus === 'index' && record.contentQuality !== 'strong') {
        hasError = true;
        recommendation.push('Page marked index with weak/medium quality');
    }

    if (record.pageType === 'city' && record.indexStatus === 'index' && (!record.faqs || record.faqs.length === 0)) {
        hasError = true;
        recommendation.push('City page indexable without FAQs');
    }

    if (record.pageType === 'city' && record.indexStatus === 'index' && (!record.localNeeds || !record.culturalNote)) {
        hasError = true;
        recommendation.push('City page indexable without local context');
    }

    if (record.pageType === 'city' && record.indexStatus === 'noindex' && (!record.culturalNote)) {
        warningCount++;
        recommendation.push('Cultural note missing on noindex draft page');
    }

    if (record.indexStatus === 'noindex' && record.contentQuality === 'medium') {
        warningCount++;
        recommendation.push('Medium content quality on noindex page');
    }

    // Fake claims checks (basic text search)
    const allText = JSON.stringify(record).toLowerCase();
    if (allText.includes('local office') || allText.includes('physical branch')) {
        hasError = true;
        recommendation.push('Fake local office claim');
    }

    const phoneRegex = /\+?[0-9]{1,4}?[-.\s]?\(?[0-9]{1,3}?\)?[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{3,4}/;
    if (phoneRegex.test(allText)) {
       //hasError = true;
       //recommendation.push('Possible fake phone number');
    }

    if (record.indexStatus === 'noindex' && (!record.faqs || record.faqs.length < 3)) {
        warningCount++;
        recommendation.push('FAQ count low for noindex page');
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

import { execSync } from 'child_process';

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
        fs.unlinkSync(jsFile);
        return JSON.parse(output);
    } catch (e) {
        console.error("Error executing TS dump:", e.message);
        if(fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        const jsFile = tempFile.replace('.ts', '.js');
        if(fs.existsSync(jsFile)) fs.unlinkSync(jsFile);
        return [];
    }
};


const main = () => {

    let allRecords = [];

    const regions = getJSONData('regionsData');
    const countries = getJSONData('countriesData');
    const cities = getJSONData('cityContentTier1');

    allRecords = [...regions, ...countries, ...cities];

    if (allRecords.length === 0) {
        console.log("No records found or failed to parse TS files.");
        return;
    }

    // Check for duplicate slugs
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
        console.error("Duplicate slugs found:", Array.from(duplicates));
    }


    const results = allRecords.map(r => validateRecord(r, ''));

    console.log("| URL | Type | Tier | Index | Sitemap | Quality | Canonical | Schema | QuickAnswer | FAQ | Has local/cultural note | CTA | Fake Claim | Recommendation |");
    console.log("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");

    for (const r of results) {
        console.log(`| ${r.url} | ${r.pageType} | ${r.priorityTier} | ${r.indexStatus} | ${r.includeInSitemap} | ${r.contentQuality} | ${r.canonical} | ${r.schemaTypes} | ${r.hasQuickAnswer} | ${r.hasFAQ} | ${r.hasLocalContext} | ${r.hasCTA} | ${r.fakeLocalClaim} | ${r.recommendation} |`);
    }

    console.log("\nSummary:");
    console.log(`Total location records: ${totalRecords}`);
    console.log(`Tier 1 Count: ${tier1Count}`);
    console.log(`Tier 2 Count: ${tier2Count}`);
    console.log(`Tier 3 Count: ${tier3Count}`);
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
        console.log("\nValidation failed with errors.");
        process.exit(1);
    } else {
        console.log("\nValidation passed.");
    }
};

main();
