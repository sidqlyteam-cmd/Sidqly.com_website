import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');

let hasError = false;

// List of expected noindex routes
const noindexRoutes = [
  '/billing',
  '/start-pilot',
  '/implementation',
  '/migration',
  '/purchase',
  '/status',
  '/request-organization',
  '/why-fill-the-form',
  '/thank-you',
  '/thank-you/demo',
  '/thank-you/contact',
  '/thank-you/pricing',
  '/ask-sidqly',
];

console.log('--- Custom SEO Validation Script ---');

// 1. Verify sitemaps do not contain private/noindex pages
const sitemaps = [
  'sitemap-pages.xml',
  'sitemap-modules.xml',
  'sitemap-use-cases.xml',
  'sitemap-resources.xml',
  'sitemap-blog.xml',
  'sitemap-locations.xml'
];

let allSitemapUrls = [];

sitemaps.forEach(sitemapFile => {
  const filepath = path.join(publicDir, sitemapFile);
  if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, 'utf8');
    const matches = [...content.matchAll(/<loc>https:\/\/www\.sidqly\.com([^<]*)<\/loc>/g)];
    matches.forEach(match => {
      let route = match[1].trim();
      if (route === '') route = '/';
      allSitemapUrls.push({ route, file: sitemapFile });
    });
  }
});

// Check if any noindex routes exist in sitemaps
allSitemapUrls.forEach(({ route, file }) => {
  if (noindexRoutes.includes(route) || noindexRoutes.some(r => route.startsWith(r + '/'))) {
    console.error(`❌ Error: Private/Noindex route '${route}' found in sitemap file '${file}'`);
    hasError = true;
  }
});

// 2. Check for duplicate routes in sitemaps
const routeCounts = {};
allSitemapUrls.forEach(({ route }) => {
  routeCounts[route] = (routeCounts[route] || 0) + 1;
});

Object.entries(routeCounts).forEach(([route, count]) => {
  if (count > 1) {
    console.error(`❌ Error: Duplicate route '${route}' found ${count} times in sitemaps`);
    hasError = true;
  }
});

// 3. Scan TSX files to verify canonical and noindex matching
function checkFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // If file is a Page component, verify SEO setup
      if (content.includes('<SEO')) {
        const canonicalMatch = content.includes('canonical=');
        const noindexMatch = content.match(/noindex=\{?true\}?/);

        const relPath = fullPath.replace(srcDir, '').replace(/-/g, '');
        const matchesNoindexRoute = noindexRoutes.some(r => {
          return relPath.toLowerCase().includes(r.replace(/\//g, '').replace(/-/g, '').toLowerCase());
        }) || fullPath.includes('ThankYou.tsx');

        if (matchesNoindexRoute) {
          if (!noindexMatch) {
             console.error(`❌ Error: Expected private/system page '${file}' to have noindex={true} set in ${fullPath}`);
             hasError = true;
          }
        }

        if (noindexMatch) {
          // This page is set to noindex
          const isExpectedNoindex = matchesNoindexRoute || fullPath.includes('App.tsx'); // App has NotFound with noindex

          if (!isExpectedNoindex) {
             console.log(`ℹ️ Info: Page '${file}' has noindex set: ${fullPath}`);
          }
        } else {
          // Indexable page
          if (!canonicalMatch && !content.includes('{...seoData')) {
             console.error(`❌ Error: Indexable page '${file}' lacks canonical declaration in ${fullPath}`);
             hasError = true;
          }
        }
      }
    }
  }
}

checkFiles(path.join(srcDir, 'pages'));

// Final report
if (hasError) {
  console.log('\n❌ Custom SEO Validation Failed.');
  process.exit(1);
} else {
  console.log('\n✅ Custom SEO Validation Passed successfully.');
  process.exit(0);
}
