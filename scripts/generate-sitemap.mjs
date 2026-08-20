import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getIndexableLocations } from './build-locations-sitemap.mjs';
import { blogPosts } from '../src/data/blogs.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

const domain = 'https://www.sidqly.com';

const basePagesRoutes = [
    '/',
    '/what-is-sidqly',
    '/why-sidqly',
    '/mission-and-values',
    '/platform',
    '/features',
    '/product-tour',
    '/how-it-works',
    '/pricing',
    '/compare',
    '/about',
    '/contact',
    '/newsroom',
    '/media-kit',
    '/trust-center',
    '/security',
    '/privacy',
    '/accessibility',
    '/faqs',
    '/islamic-utilities',
    '/islamic-glossary',
    '/namaz-timings',
    '/islamic-calendar',
    '/moon-phase-islamic-calendar',
    '/qibla-direction',
    '/zakat-calculator',
    '/weather-charity-distribution',
    '/hajj-countdown',
    '/ramadan-planner',
    '/eid-qurbani-planner',
    '/sadqa-zakat-planner',
    '/guided-pilot',
    '/data-migration',
    '/contact-sales',
    '/islamic-charity-software',
    '/islamic-giving-operations-platform',
    '/zakat-management-software',
    '/compare/sidqly-vs-launchgood',
    '/compare/sidqly-vs-donorbox',
    '/compare/sidqly-vs-givebutter',
    '/compare/sidqly-vs-bloomerang',
    '/compare/sidqly-vs-qurbanapp',
    '/compare/sidqly-vs-mosque-management',
    '/compare/sidqly-vs-custom-software',
    '/alternatives/islamic-charity-software-alternatives',
    '/alternatives/donorbox-alternatives',
    '/alternatives/launchgood-alternatives',
    '/alternatives/qurbanapp-alternatives',
    '/alternatives/zakat-management-software-alternatives',
    '/knowledge-hub',
    '/knowledge-hub/guide-islamic-charity-operations',
    '/knowledge-hub/zakat-management-systems-guide',
    '/knowledge-hub/ramadan-food-distribution-logistics',
    '/knowledge-hub/manual-payment-verification-process',
    '/knowledge-hub/what-is-tamleek'
];

const baseModulesRoutes = [
    '/modules',
    '/modules/manual-payment-review',
    '/modules/proof-trust-engine',
    '/modules/donor-safe-updates',
    '/modules/zakat-fund-separation',
    '/modules/sadaqah-campaigns',
    '/modules/qurbani-lifecycle',
    '/modules/ramadan-meals-rations',
    '/modules/charity-request-intake',
    '/modules/vendor-fulfillment',
    '/modules/volunteer-coordination',
    '/modules/corporate-csr-zakat',
    '/modules/receipts-certificates',
    '/modules/qr-code-verification',
    '/modules/reports-board-packs',
    '/modules/privacy-dignity-controls',
    '/modules/audit-ready-records',
    '/modules/donor-communication',
    '/modules/pilot-launch-support'
];

const baseUseCasesRoutes = [
    '/use-cases',
    '/use-cases/mosques',
    '/use-cases/islamic-charities',
    '/use-cases/zakat-committees',
    '/use-cases/qurbani-organizers',
    '/use-cases/sadaqah-campaign-teams',
    '/use-cases/corporate-sponsors'
];

const baseResourcesRoutes = [
    '/resources',
    '/resources/eid-giving',
    '/resources/what-is-islamic-charity-management-software',
    '/resources/how-to-manage-zakat-requests'
];

const baseBlogRoutes = [
    '/blog',
    ...blogPosts.map(post => `/blog/${post.slug}`)
];

const baseLocationsRoutes = [
    '/regions',
    '/locations',
    ...getIndexableLocations()
];

const expandWithMultilingual = (routes) => {
    const set = new Set();
    routes.forEach(r => {
        set.add(r);
        set.add(r === '/' ? '/ar' : `/ar${r}`);
        set.add(r === '/' ? '/ur' : `/ur${r}`);
    });
    return Array.from(set);
};

const pagesRoutes = expandWithMultilingual(basePagesRoutes);
const modulesRoutes = expandWithMultilingual(baseModulesRoutes);
const useCasesRoutes = expandWithMultilingual(baseUseCasesRoutes);
const resourcesRoutes = expandWithMultilingual(baseResourcesRoutes);
const blogRoutes = expandWithMultilingual(baseBlogRoutes);
const locationsRoutes = expandWithMultilingual(baseLocationsRoutes);

const aiRoutes = [
    '/llms.txt',
    '/ai-summary.md',
    '/product-overview.md',
    '/pricing-summary.md',
    '/faqs-summary.md',
    '/trust-and-safety.md',
    '/blog-index.md',
    '/schema-map.md'
];

const today = new Date().toISOString().split('T')[0];

const generateUrlset = (routesList) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routesList.forEach(route => {
        const fullUrl = route.startsWith('/') ? `${domain}${route}` : route;
        xml += `  <url>\n`;
        xml += `    <loc>${fullUrl}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>\n`;
    return xml;
};

const generateIndex = (sitemapsList) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    sitemapsList.forEach(sitemapName => {
        xml += `  <sitemap>\n`;
        xml += `    <loc>${domain}/${sitemapName}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `  </sitemap>\n`;
    });

    xml += `</sitemapindex>\n`;
    return xml;
};

// Write individual sitemaps
fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), generateUrlset(pagesRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-modules.xml'), generateUrlset(modulesRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-use-cases.xml'), generateUrlset(useCasesRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-resources.xml'), generateUrlset(resourcesRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-blog.xml'), generateUrlset(blogRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-ai.xml'), generateUrlset(aiRoutes));
fs.writeFileSync(path.join(publicDir, 'sitemap-locations.xml'), generateUrlset(locationsRoutes));

// Write sitemap index
const sitemapFiles = [
    'sitemap-pages.xml',
    'sitemap-modules.xml',
    'sitemap-use-cases.xml',
    'sitemap-resources.xml',
    'sitemap-blog.xml',
    'sitemap-ai.xml',
    'sitemap-locations.xml'
];
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateIndex(sitemapFiles));

console.log(`Successfully generated sitemap index and ${sitemapFiles.length} child sitemaps in ${publicDir}`);
