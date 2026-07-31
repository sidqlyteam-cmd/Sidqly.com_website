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
  '/why-sidqly',
  '/trust-and-dignity',
  '/proof-trust-engine',
  '/verified-giving',
  '/manual-payment-review',
  '/donor-safe-impact',
  '/corporate-reporting',
  '/zakat-fund-separation',
  '/qurbani-management-software',
  '/ramadan-donation-management',
  '/charity-request-management',
  '/vendor-fulfillment-platform',
  '/islamic-charity-software',
  '/mosque-donation-management'
];

console.log('--- ADVANCED TECHNICAL SEO VALIDATION ---');

// 1. Verify sitemaps do not contain private/noindex pages or redirects/duplicates/trailing slashes
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

// A. Check if any noindex routes exist in sitemaps
allSitemapUrls.forEach(({ route, file }) => {
  if (noindexRoutes.includes(route) || noindexRoutes.some(r => route.startsWith(r + '/'))) {
    console.error(`❌ Sitemap Error: Private/Noindex route '${route}' found in sitemap file '${file}'`);
    hasError = true;
  }
});

// B. Check for duplicate routes in sitemaps
const routeCounts = {};
allSitemapUrls.forEach(({ route }) => {
  routeCounts[route] = (routeCounts[route] || 0) + 1;
});

Object.entries(routeCounts).forEach(([route, count]) => {
  if (count > 1) {
    console.error(`❌ Sitemap Error: Duplicate route '${route}' found ${count} times in sitemaps`);
    hasError = true;
  }
});

// C. Check for trailing slash inconsistencies in sitemaps (all URLs must exclude trailing slash to match config)
allSitemapUrls.forEach(({ route, file }) => {
  if (route !== '/' && route.endsWith('/')) {
    console.error(`❌ Sitemap Error: Trailing slash found on route '${route}' in sitemap file '${file}' (trailingSlash: false is enforced)`);
    hasError = true;
  }
});

// 2. Scan TSX files to verify canonical, noindex matching, and OG/Twitter URL consistency
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

        // Check if expected noindex page actually has noindex set
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

        // Verify that any canonical matches do not point to wrong host
        if (content.includes('canonical="http:')) {
          console.error(`❌ Error: Canonical in '${file}' uses non-HTTPS protocol in ${fullPath}`);
          hasError = true;
        }
        if (content.includes('canonical="https://sidqly.com')) {
          console.error(`❌ Error: Canonical in '${file}' uses non-www apex host in ${fullPath}`);
          hasError = true;
        }
      }
    }
  }
}

checkFiles(path.join(srcDir, 'pages'));

// 3. Verify Soft 404 & Invalid Route Responses (Audit our Firebase configuration)
const firebaseJsonPath = path.join(projectRoot, 'firebase.json');
if (fs.existsSync(firebaseJsonPath)) {
  const firebaseConfig = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));
  const rewrites = firebaseConfig.hosting.rewrites || [];

  // A. Check if catch-all wildcard is present (which triggers Soft 404s)
  const catchAll = rewrites.find(r => r.source === '**');
  if (catchAll) {
    console.error(`❌ Security Error: Firebase Hosting has a catch-all '**' rewrite. This will cause soft 404s!`);
    hasError = true;
  }

  // B. Verify that only actual classified routes are in the rewrites list
  const rewriteSources = rewrites.map(r => r.source);
  rewriteSources.forEach(source => {
    // If it's a random invalid URL pattern, it shouldn't be rewritten
    if (source.includes('invalid') || source.includes('non-existent')) {
      console.error(`❌ Config Error: Found invalid rewrite source '${source}' in firebase.json`);
      hasError = true;
    }
  });
}

// Final report
if (hasError) {
  console.log('\n❌ Custom Advanced Technical SEO Validation Failed.');
  process.exit(1);
} else {
  console.log('\n✅ Custom Advanced Technical SEO Validation Passed successfully.');
  process.exit(0);
}
