import { regionsData } from '../src/data/locations/regions.js';
import { countriesData } from '../src/data/locations/countries.js';
import { cityContentTier1 } from '../src/data/locations/cityContentTier1.js';

export const getIndexableLocations = () => {
    const allRecords = [
        ...(regionsData || []),
        ...(countriesData || []),
        ...(cityContentTier1 || [])
    ];

    const slugs = [];
    for (const record of allRecords) {
        if (
            record.indexStatus === 'index' &&
            record.includeInSitemap === true &&
            record.contentQuality === 'strong' &&
            record.priorityTier === 1
        ) {
            slugs.push(`/locations/${record.slug}`);
        }
    }
    return slugs;
};
