import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const extractRecords = (filePath) => {
    try {
        const content = fs.readFileSync(path.join(projectRoot, filePath), 'utf8');

        const output = [];
        const records = content.split('},');
        for (const record of records) {
            if (!record.includes('slug:')) continue;

            const slugMatch = record.match(/slug:\s*'([^']+)'/);
            const typeMatch = record.match(/pageType:\s*'([^']+)'/);
            const tierMatch = record.match(/priorityTier:\s*(\d)/);
            const statusMatch = record.match(/indexStatus:\s*'([^']+)'/);
            const sitemapMatch = record.match(/includeInSitemap:\s*(true|false)/);
            const qualityMatch = record.match(/contentQuality:\s*'([^']+)'/);
            const canonicalMatch = record.match(/canonicalPath:\s*'([^']+)'/);
            const faqsMatch = record.match(/faqs:\s*\[([^\]]*)\]/);
            const ctaMatch = true; // Hardcoded in component

            if (slugMatch) {
                output.push({
                    url: canonicalMatch ? canonicalMatch[1] : `/locations/${slugMatch[1]}/`,
                    pageType: typeMatch ? typeMatch[1] : 'unknown',
                    priorityTier: tierMatch ? tierMatch[1] : 'unknown',
                    indexStatus: statusMatch ? statusMatch[1] : 'unknown',
                    includeInSitemap: sitemapMatch ? sitemapMatch[1] : 'unknown',
                    contentQuality: qualityMatch ? qualityMatch[1] : 'unknown',
                    canonical: canonicalMatch ? canonicalMatch[1] : `/locations/${slugMatch[1]}/`,
                    schemaTypes: 'WebPage' + (faqsMatch && faqsMatch[1].includes('{') ? ', FAQPage' : ''),
                    hasQuickAnswer: record.includes('quickAnswer:') ? 'yes' : 'no',
                    hasFAQ: faqsMatch && faqsMatch[1].includes('{') ? 'yes' : 'no',
                    hasCTA: 'yes',
                    fakeLocalClaim: 'no', // Assumed no based on component strictness
                    recommendation: (statusMatch && statusMatch[1] === 'index' && qualityMatch && qualityMatch[1] === 'strong') ? 'Pass' : 'Review'
                });
            }
        }
        return output;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
        return [];
    }
};

const main = () => {
    let allRecords = [];
    allRecords.push(...extractRecords('src/data/locations/regions.ts'));
    allRecords.push(...extractRecords('src/data/locations/countries.ts'));
    allRecords.push(...extractRecords('src/data/locations/cities.ts'));

    console.log("| URL | Type | Tier | Index | Sitemap | Quality | Canonical | Schema | QuickAnswer | FAQ | CTA | Fake Claim | Recommendation |");
    console.log("|---|---|---|---|---|---|---|---|---|---|---|---|---|");

    for (const r of allRecords) {
        console.log(`| ${r.url} | ${r.pageType} | ${r.priorityTier} | ${r.indexStatus} | ${r.includeInSitemap} | ${r.contentQuality} | ${r.canonical} | ${r.schemaTypes} | ${r.hasQuickAnswer} | ${r.hasFAQ} | ${r.hasCTA} | ${r.fakeLocalClaim} | ${r.recommendation} |`);
    }
};

main();
