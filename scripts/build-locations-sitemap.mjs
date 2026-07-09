import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Use esbuild or just read the ts file directly to extract slugs since we can't easily import .ts in a simple node script without loader

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

export const getIndexableLocations = () => {
    let slugs = [];
    const files = ['src/data/locations/regions.ts', 'src/data/locations/countries.ts', 'src/data/locations/cities.ts', 'src/data/locations/cityContentTier1.ts'];

    for (const file of files) {
        try {
            const content = fs.readFileSync(path.join(projectRoot, file), 'utf8');
            // very basic regex to extract indexable slugs
            // looking for objects with indexStatus: 'index' and includeInSitemap: true, contentQuality: 'strong'
            const records = content.split('},');
            for (const record of records) {
                if (
                    (record.includes("indexStatus: 'index'") || record.includes('indexStatus: "index"')) &&
                    (record.includes("includeInSitemap: true") || record.includes("includeInSitemap: true")) &&
                    (record.includes("contentQuality: 'strong'") || record.includes('contentQuality: "strong"')) &&
                    !(record.includes("priorityTier: 2") || record.includes("priorityTier: 3"))
                ) {
                    const slugMatch = record.match(/slug:\s*'([^']+)'/);
                    if (slugMatch && slugMatch[1]) {
                        slugs.push(`/locations/${slugMatch[1]}/`);
                    }
                }
            }
        } catch (e) {
            console.error(`Error reading ${file}:`, e);
        }
    }
    return slugs;
};
