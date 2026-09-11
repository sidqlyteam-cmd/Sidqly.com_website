import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/data/blogs.ts';
import { legalPolicies } from '../src/data/legalPolicies.ts';
import { knowledgeHub } from '../src/data/knowledgeHub.ts';
import { comparisons } from '../src/data/comparisons.ts';
import { resources } from '../src/data/resources.ts';
import { useCases } from '../src/data/useCases.ts';
import { modules, solutions } from '../src/data/solutions_modules.ts';
import { getIndexableLocations } from './build-locations-sitemap.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

const domain = 'https://www.sidqly.com';
const supportedLanguages = ['ar', 'ur', 'fr', 'de'];

// Helper to expand base English routes with multilingual variants
const expandWithMultilingual = (routes) => {
    const set = new Set();
    routes.forEach(r => {
        let norm = r === '/' ? '/' : (r.startsWith('/') ? r : '/' + r);
        if (norm.length > 1 && norm.endsWith('/')) {
            norm = norm.slice(0, -1);
        }
        set.add(norm);
        supportedLanguages.forEach(lang => {
            set.add(norm === '/' ? `/${lang}` : `/${lang}${norm}`);
        });
    });
    return Array.from(set).sort();
};

// 1. Blog Routes
const baseBlogRoutes = ['/blog', ...blogPosts.map(p => `/blog/${p.slug}`)];
const blogRoutes = expandWithMultilingual(baseBlogRoutes);

// 2. Location Routes
const baseLocationsRoutes = ['/regions', '/locations', ...getIndexableLocations()];
const locationsRoutes = expandWithMultilingual(baseLocationsRoutes);

// 3. Module Routes
const baseModulesRoutes = ['/modules', ...modules.map(m => `/modules/${m.slug}`)];
const modulesRoutes = expandWithMultilingual(baseModulesRoutes);

// 4. Use Case Routes
const baseUseCasesRoutes = ['/use-cases', ...useCases.map(u => `/use-cases/${u.slug}`)];
const useCasesRoutes = expandWithMultilingual(baseUseCasesRoutes);

// 5. Resource Routes
const baseResourcesRoutes = ['/resources', ...resources.map(r => `/resources/${r.slug}`)];
const resourcesRoutes = expandWithMultilingual(baseResourcesRoutes);

// 6. AI Documentation Routes (English static assets only, no multilingual variants)
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

// 7. Core Pages Routes (Discovered from App.tsx + Data Models)
const excludeSet = new Set([
    // Redirects
    '/demo', '/how-sidqly-works', '/trust',
    // Non-indexable / system / private / thank-you
    '/billing', '/start-pilot', '/implementation', '/migration', '/purchase', '/status',
    '/request-organization', '/why-fill-the-form', '/ask-sidqly',
    '/thank-you', '/thank-you/demo', '/thank-you/contact', '/thank-you/pricing',
    'not-found', '*', '/:lang',
    // Vanity comparison routes marked as noindex in routeClassification.ts
    '/trust-and-dignity', '/proof-trust-engine', '/verified-giving', '/manual-payment-review',
    '/donor-safe-impact', '/corporate-reporting', '/zakat-fund-separation',
    '/qurbani-management-software', '/ramadan-donation-management', '/charity-request-management',
    '/vendor-fulfillment-platform', '/mosque-donation-management'
]);

// Dynamic sub-routes to include in Pages category
const dynamicPagesRoutes = [
    '/knowledge-hub',
    ...knowledgeHub.map(k => `/knowledge-hub/${k.slug}`),
    '/legal',
    ...legalPolicies.map(l => `/legal/${l.slug}`),
    '/solutions',
    ...solutions.map(s => `/solutions/${s.slug}`),
    '/compare',
    ...comparisons.map(c => {
        if (c.slug.endsWith('-alternatives')) return `/alternatives/${c.slug}`;
        return `/compare/${c.slug}`;
    })
];

const appTsxPath = path.join(__dirname, '../src/App.tsx');
const appTsx = fs.readFileSync(appTsxPath, 'utf8');
const rawAppRoutes = [...appTsx.matchAll(/path=["']([^"']+)["']/g)].map(m => m[1]);

const staticPagesSet = new Set();
rawAppRoutes.forEach(p => {
    if (p.includes(':') || excludeSet.has(p) || excludeSet.has('/' + p)) return;
    if (p.startsWith('blog') || p.startsWith('locations') || p.startsWith('regions') || p.startsWith('modules') || p.startsWith('use-cases') || p.startsWith('resources')) return;
    const pathStr = p === '' ? '/' : (p.startsWith('/') ? p : '/' + p);
    staticPagesSet.add(pathStr);
});

dynamicPagesRoutes.forEach(p => staticPagesSet.add(p));

const basePagesRoutes = Array.from(staticPagesSet).sort();
const pagesRoutes = expandWithMultilingual(basePagesRoutes);

// XML Generation Utilities
const today = new Date().toISOString().split('T')[0];

const normalizeUrl = (route) => {
    if (route.startsWith('http://') || route.startsWith('https://')) {
        return route;
    }
    const cleanRoute = route.startsWith('/') ? route : `/${route}`;
    if (cleanRoute === '/') {
        return `${domain}/`;
    }
    const noTrailing = cleanRoute.endsWith('/') ? cleanRoute.slice(0, -1) : cleanRoute;
    return `${domain}${noTrailing}`.replace(/([^:]\/)\/+/g, "$1");
};

const generateUrlset = (routesList) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routesList.forEach(route => {
        const fullUrl = normalizeUrl(route);
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

// Print required statistics
const totalUniqueUrls = new Set([
    ...pagesRoutes,
    ...modulesRoutes,
    ...useCasesRoutes,
    ...resourcesRoutes,
    ...blogRoutes,
    ...aiRoutes,
    ...locationsRoutes
]).size;

console.log(`Successfully generated sitemap index and ${sitemapFiles.length} child sitemaps in ${publicDir}`);
console.log(`Pages: ${pagesRoutes.length}`);
console.log(`Modules: ${modulesRoutes.length}`);
console.log(`Use Cases: ${useCasesRoutes.length}`);
console.log(`Resources: ${resourcesRoutes.length}`);
console.log(`Blog: ${blogRoutes.length}`);
console.log(`AI: ${aiRoutes.length}`);
console.log(`Locations: ${locationsRoutes.length}`);
console.log(`Total unique URLs: ${totalUniqueUrls}`);
