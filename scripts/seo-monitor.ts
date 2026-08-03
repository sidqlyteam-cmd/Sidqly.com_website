import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const publicDir = path.join(projectRoot, 'public');

console.log('=== AUTOMATED INDEXING HEALTH MONITORING ===');

// Gather all indexable sitemap routes
const sitemaps = [
  'sitemap-pages.xml',
  'sitemap-modules.xml',
  'sitemap-use-cases.xml',
  'sitemap-resources.xml',
  'sitemap-blog.xml',
  'sitemap-locations.xml'
];

const indexableRoutes: string[] = [];

sitemaps.forEach(sitemapFile => {
  const filepath = path.join(publicDir, sitemapFile);
  if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, 'utf8');
    const matches = [...content.matchAll(/<loc>https:\/\/www\.sidqly\.com([^<]*)<\/loc>/g)];
    matches.forEach(match => {
      let route = match[1].trim();
      if (route === '') route = '/';
      indexableRoutes.push(route);
    });
  }
});

let failedCount = 0;
let passedCount = 0;

console.log(`Auditing ${indexableRoutes.length} sitemapped public indexable URLs...`);

indexableRoutes.forEach(route => {
  let targetFile;
  if (route === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    targetFile = path.join(distDir, `${route.slice(1)}.html`);
  }

  console.log(`Auditing route: ${route}`);

  // 1. Check if pre-rendered file exists (Server-side 200 equivalent)
  if (!fs.existsSync(targetFile)) {
    console.error(`❌ Health Check Failed: Pre-rendered HTML file for '${route}' not found at ${targetFile} (HTTP 404 equivalent)`);
    failedCount++;
    return;
  }

  const html = fs.readFileSync(targetFile, 'utf8');

  // 2. Has canonical tag pointing to correct URL
  const expectedCanonical = `https://www.sidqly.com${route}`;
  const canonicalRegex = /<link\s+rel="canonical"\s+href="([^"]+)"/i;
  const canonicalMatch = html.match(canonicalRegex);

  if (!canonicalMatch) {
    console.error(`❌ Health Check Failed: Route '${route}' has no canonical tag!`);
    failedCount++;
    return;
  }

  const actualCanonical = canonicalMatch[1];
  if (actualCanonical !== expectedCanonical) {
    console.error(`❌ Health Check Failed: Canonical mismatch on '${route}'. Expected: '${expectedCanonical}', Got: '${actualCanonical}'`);
    failedCount++;
    return;
  }

  // 3. Is indexable (no noindex or nofollow meta robots tags present)
  const isNoindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html) || /<meta\s+name="robots"\s+content="[^"]*nofollow/i.test(html);
  if (isNoindex) {
    console.error(`❌ Health Check Failed: Route '${route}' is inside sitemap but contains a 'noindex' or 'nofollow' meta robots tag!`);
    failedCount++;
    return;
  }

  // 4. No trailing slash or wrong host redirects
  if (route !== '/' && route.endsWith('/')) {
    console.error(`❌ Health Check Failed: Route '${route}' has a trailing slash which causes a redirect loop under trailingSlash: false`);
    failedCount++;
    return;
  }

  // 5. Structured data present (if applicable - e.g. use-cases, modules, solutions, blogs, resources)
  const isDynamicRoute = route.startsWith('/modules/') || route.startsWith('/use-cases/') || route.startsWith('/solutions/') || route.startsWith('/blog/') || route.startsWith('/resources/') || route === '/pricing';
  if (isDynamicRoute) {
    const hasSchema = html.includes('type="application/ld+json"');
    if (!hasSchema) {
      console.warn(`⚠️ Health Warning: Dynamic Route '${route}' lacks JSON-LD structured schema.`);
    }
  }

  passedCount++;
});

console.log('\n--- MONITORING SUMMARY ---');
console.log(`Passed Checks: ${passedCount}`);
console.log(`Failed Checks: ${failedCount}`);

if (failedCount > 0) {
  console.error('\n❌ SEO Indexing Health Monitoring Failed.');
  process.exit(1);
} else {
  console.log('\n✅ SEO Indexing Health Monitoring Passed successfully. Website is 100% healthy and crawler-ready!');
  process.exit(0);
}
