import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Define known static routes that we want in the sitemap.
// Thank-you pages are intentionally excluded.
const routes = [
    'https://sidqly.com/',
    'https://sidqly.com/features',
    'https://sidqly.com/how-it-works',
    'https://sidqly.com/pricing',
    'https://sidqly.com/compare',
    'https://sidqly.com/use-cases',
    'https://sidqly.com/use-cases/mosques',
    'https://sidqly.com/use-cases/islamic-charities',
    'https://sidqly.com/use-cases/zakat-committees',
    'https://sidqly.com/use-cases/qurbani-organizers',
    'https://sidqly.com/use-cases/sadaqah-campaign-teams',
    'https://sidqly.com/use-cases/corporate-sponsors',
    'https://sidqly.com/regions',
    'https://sidqly.com/resources',
    'https://sidqly.com/blog',
    'https://sidqly.com/resources/eid-giving',
    'https://sidqly.com/islamic-utilities',
    'https://sidqly.com/islamic-glossary',
    'https://sidqly.com/faqs',
    'https://sidqly.com/sitemap',
    'https://sidqly.com/trust-center',
    'https://sidqly.com/security',
    'https://sidqly.com/privacy',
    'https://sidqly.com/accessibility',
    'https://sidqly.com/proof-trust-engine',
    'https://sidqly.com/about',
    'https://sidqly.com/contact',
    'https://sidqly.com/newsroom',
    'https://sidqly.com/media-kit',
    'https://sidqly.com/modules',
    'https://sidqly.com/modules/manual-payment-review',
    'https://sidqly.com/modules/proof-trust-engine',
    'https://sidqly.com/modules/donor-safe-updates',
    'https://sidqly.com/modules/zakat-fund-separation',
    'https://sidqly.com/modules/sadaqah-campaigns',
    'https://sidqly.com/modules/qurbani-lifecycle',
    'https://sidqly.com/modules/ramadan-meals-rations',
    'https://sidqly.com/modules/charity-request-intake',
    'https://sidqly.com/modules/vendor-fulfillment',
    'https://sidqly.com/modules/volunteer-coordination',
    'https://sidqly.com/modules/corporate-csr-zakat',
    'https://sidqly.com/modules/receipts-certificates',
    'https://sidqly.com/modules/qr-code-verification',
    'https://sidqly.com/modules/reports-board-packs',
    'https://sidqly.com/modules/privacy-dignity-controls',
    'https://sidqly.com/modules/audit-ready-records',
    'https://sidqly.com/modules/donor-communication',
    'https://sidqly.com/modules/pilot-launch-support',
    'https://sidqly.com/namaz-timings',
    'https://sidqly.com/islamic-calendar',
    'https://sidqly.com/moon-phase-islamic-calendar',
    'https://sidqly.com/qibla-direction',
    'https://sidqly.com/zakat-calculator',
    'https://sidqly.com/weather-charity-distribution',
    'https://sidqly.com/hajj-countdown',
    'https://sidqly.com/ramadan-planner',
    'https://sidqly.com/eid-qurbani-planner',
    'https://sidqly.com/sadqa-zakat-planner'
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach(route => {
        xml += `  <url>\n`;
        xml += `    <loc>${route}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>\n`;
    return xml;
};

fs.writeFileSync(sitemapPath, generateSitemap());
console.log(`Successfully generated sitemap with ${routes.length} routes at ${sitemapPath}`);
