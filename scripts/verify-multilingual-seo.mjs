import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const publicDir = path.join(projectRoot, 'public');

const testUrls = [
  { url: '/', lang: 'en', dir: 'ltr', file: 'index.html' },
  { url: '/locations', lang: 'en', dir: 'ltr', file: 'locations.html' },
  { url: '/locations/karachi-islamic-charity-software', lang: 'en', dir: 'ltr', file: 'locations/karachi-islamic-charity-software.html' },
  { url: '/ar', lang: 'ar', dir: 'rtl', file: 'ar.html' },
  { url: '/ar/locations', lang: 'ar', dir: 'rtl', file: 'ar/locations.html' },
  { url: '/ar/locations/karachi-islamic-charity-software', lang: 'ar', dir: 'rtl', file: 'ar/locations/karachi-islamic-charity-software.html' },
  { url: '/ur', lang: 'ur', dir: 'rtl', file: 'ur.html' },
  { url: '/ur/locations', lang: 'ur', dir: 'rtl', file: 'ur/locations.html' },
  { url: '/ur/locations/karachi-islamic-charity-software', lang: 'ur', dir: 'rtl', file: 'ur/locations/karachi-islamic-charity-software.html' },
  { url: '/fr', lang: 'fr', dir: 'ltr', file: 'fr.html' },
  { url: '/fr/locations', lang: 'fr', dir: 'ltr', file: 'fr/locations.html' },
  { url: '/fr/locations/karachi-islamic-charity-software', lang: 'fr', dir: 'ltr', file: 'fr/locations/karachi-islamic-charity-software.html' },
  { url: '/de', lang: 'de', dir: 'ltr', file: 'de.html' },
  { url: '/de/locations', lang: 'de', dir: 'ltr', file: 'de/locations.html' },
  { url: '/de/locations/karachi-islamic-charity-software', lang: 'de', dir: 'ltr', file: 'de/locations/karachi-islamic-charity-software.html' },
];

console.log('--- STARTING PRODUCTION SEO MULTILINGUAL VERIFICATION ---');

let overallPass = true;

function checkHtmlFile(target) {
  const filePath = path.join(distDir, target.file);
  const exists = fs.existsSync(filePath);

  if (!exists) {
    return { pass: false, error: `Static file ${target.file} does not exist in dist/` };
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check lang and dir
  const hasLang = content.includes(`lang="${target.lang}"`);
  const hasDir = content.includes(`dir="${target.dir}"`);

  // Check title
  const hasTitle = /<title>[^<]+<\/title>/i.test(content);

  // Check description
  const hasMetaDesc = /<meta name="description" content="[^"]+"/i.test(content);

  // Check canonical points to target language URL
  const expectedCanonical = target.url === '/'
    ? 'https://www.sidqly.com/'
    : `https://www.sidqly.com${target.url}`;

  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/i);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1] : null;
  const canonicalCorrect = canonicalUrl === expectedCanonical;

  // Check hreflangs
  const hasHreflangEn = content.includes('hrefLang="en"') || content.includes('hreflang="en"');
  const hasHreflangAr = content.includes('hrefLang="ar"') || content.includes('hreflang="ar"');
  const hasHreflangUr = content.includes('hrefLang="ur"') || content.includes('hreflang="ur"');
  const hasHreflangFr = content.includes('hrefLang="fr"') || content.includes('hreflang="fr"');
  const hasHreflangDe = content.includes('hrefLang="de"') || content.includes('hreflang="de"');
  const hasHreflangDefault = content.includes('hrefLang="x-default"') || content.includes('hreflang="x-default"');

  const checks = {
    exists,
    hasLang,
    hasDir,
    hasTitle,
    hasMetaDesc,
    canonicalCorrect,
    hasHreflangs: hasHreflangEn && hasHreflangAr && hasHreflangUr && hasHreflangFr && hasHreflangDe && hasHreflangDefault,
  };

  const pass = Object.values(checks).every(Boolean);
  return { pass, checks, canonicalUrl, expectedCanonical };
}

// 1. Check sitemaps
console.log('\nChecking Sitemaps...');
const pagesSitemap = fs.readFileSync(path.join(publicDir, 'sitemap-pages.xml'), 'utf8');
const locationsSitemap = fs.readFileSync(path.join(publicDir, 'sitemap-locations.xml'), 'utf8');

testUrls.forEach(t => {
  const fullLoc = t.url === '/' ? 'https://www.sidqly.com/' : `https://www.sidqly.com${t.url}`;
  const inPages = pagesSitemap.includes(`<loc>${fullLoc}</loc>`);
  const inLocs = locationsSitemap.includes(`<loc>${fullLoc}</loc>`);
  const inSitemap = inPages || inLocs;

  console.log(`[Sitemap] ${fullLoc}: ${inSitemap ? 'PASS' : 'FAIL'}`);
  if (!inSitemap) overallPass = false;
});

// 2. Check Static Pre-rendered HTML Files
console.log('\nChecking Static Pre-rendered HTML Files in dist/...');
testUrls.forEach(t => {
  const res = checkHtmlFile(t);
  console.log(`[HTML Static Check] ${t.url} (${t.lang}): ${res.pass ? 'PASS' : 'FAIL'}`);
  if (!res.pass) {
    console.error(`   Details:`, res);
    overallPass = false;
  }
});

console.log('\n--- VERIFICATION RESULT ---');
if (overallPass) {
  console.log('✅ ALL 17 PRODUCTION MULTILINGUAL SEO CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('❌ MULTILINGUAL SEO VERIFICATION FAILED.');
  process.exit(1);
}
