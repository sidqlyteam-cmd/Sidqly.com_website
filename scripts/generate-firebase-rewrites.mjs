import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const publicDir = path.join(projectRoot, 'public');
const firebaseJsonPath = path.join(projectRoot, 'firebase.json');

async function generateRewrites() {
    const sitemaps = [
        'sitemap-pages.xml',
        'sitemap-modules.xml',
        'sitemap-use-cases.xml',
        'sitemap-resources.xml',
        'sitemap-blog.xml',
        'sitemap-locations.xml'
    ];

    let allRoutes = new Set();

    for (const sitemapFile of sitemaps) {
        if (fs.existsSync(path.join(publicDir, sitemapFile))) {
            const content = fs.readFileSync(path.join(publicDir, sitemapFile), 'utf8');
            const matches = [...content.matchAll(/<loc>https:\/\/www\.sidqly\.com([^<]*)<\/loc>/g)];
            for (const match of matches) {
                let route = match[1].trim();
                if (route === '') route = '/';
                allRoutes.add(route);
            }
        }
    }

    // Explicit valid routes that are noindex and thus not in sitemaps
    const noindexRoutes = [
        "/thank-you",
        "/thank-you/demo",
        "/thank-you/contact",
        "/thank-you/pricing",
        "/status",
        "/ask-sidqly",
        "/why-fill-the-form",
        "/brand", // wait, brand was in pages? let's ensure it's there
        "/help"
    ];

    noindexRoutes.forEach(r => allRoutes.add(r));

    // Convert to sorted array for deterministic output
    const sortedRoutes = Array.from(allRoutes).sort();

    const rewrites = [];

    for (const route of sortedRoutes) {
        rewrites.push({ source: route, destination: "/index.html" });

        // Handle trailing slash variants
        if (route !== '/') {
           if (route.endsWith('/')) {
               rewrites.push({ source: route.slice(0, -1), destination: "/index.html" });
           } else {
               rewrites.push({ source: route + '/', destination: "/index.html" });
           }
        }
    }

    // Deduplicate
    const uniqueSources = new Set();
    const finalRewrites = [];
    for (const r of rewrites) {
        if (!uniqueSources.has(r.source)) {
            uniqueSources.add(r.source);
            finalRewrites.push(r);
        }
    }

    const firebaseConfig = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));

    // Replace rewrites
    firebaseConfig.hosting.rewrites = finalRewrites;

    fs.writeFileSync(firebaseJsonPath, JSON.stringify(firebaseConfig, null, 2));
    console.log(`Generated ${finalRewrites.length} deterministic Firebase rewrites. Catch-all ** rewrite removed to support strict 404s.`);
}

generateRewrites();
