import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

const domain = 'https://sidqly.com';

const pagesRoutes = [
    '/',
    '/features',
    '/how-it-works',
    '/pricing',
    '/compare',
    '/regions',
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
    '/sadqa-zakat-planner'
];

const modulesRoutes = [
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
    '/modules/pilot-launch-support',
    '/proof-trust-engine' // also has a custom route in original list
];

const useCasesRoutes = [
    '/use-cases',
    '/use-cases/mosques',
    '/use-cases/islamic-charities',
    '/use-cases/zakat-committees',
    '/use-cases/qurbani-organizers',
    '/use-cases/sadaqah-campaign-teams',
    '/use-cases/corporate-sponsors'
];

const resourcesRoutes = [
    '/resources',
    '/resources/eid-giving',
    '/resources/what-is-islamic-charity-management-software',
    '/resources/how-to-manage-zakat-requests'
];

const blogRoutes = [
    '/blog'
];

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

// Write sitemap index
const sitemapFiles = [
    'sitemap-pages.xml',
    'sitemap-modules.xml',
    'sitemap-use-cases.xml',
    'sitemap-resources.xml',
    'sitemap-blog.xml',
    'sitemap-ai.xml'
];
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateIndex(sitemapFiles));

console.log(`Successfully generated sitemap index and ${sitemapFiles.length} child sitemaps in ${publicDir}`);
