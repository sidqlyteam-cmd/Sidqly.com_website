import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const artifactDir = 'C:\\Users\\ahesh\\.gemini\\antigravity\\brain\\e83db2a4-d566-400b-ae1b-49119c3f3421';

const baseUrl = 'https://www.sidqly.com';

const pagesToAuditAndScreenshot = [
  { name: 'home', path: '/', title: 'Home Page' },
  { name: 'features', path: '/features', title: 'Features & Architecture' },
  { name: 'pricing', path: '/pricing', title: 'Pricing & Plans' },
  { name: 'how_it_works', path: '/how-it-works', title: 'How It Works (Operational Lifecycle)' },
  { name: 'locations_hub', path: '/locations', title: 'Locations & Global Hubs' },
  { name: 'location_doha', path: '/locations/doha-islamic-charity-software', title: 'Doha Location Hub' },
  { name: 'location_pakistan', path: '/locations/pakistan', title: 'Pakistan Country Hub' },
  { name: 'blog_hub', path: '/blog', title: 'Blog & Articles Hub' },
  { name: 'blog_detail', path: '/blog/how-to-manage-vendor-delivery-tasks', title: 'Blog Article (Vendor Fulfillment)' },
  { name: 'solutions_sadaqah', path: '/solutions/sadaqah-campaign-teams', title: 'Solutions (Sadaqah Campaign Teams)' },
  { name: 'modules_zakat', path: '/modules/zakat-fund-separation', title: 'Modules (Zakat Fund Separation)' },
  { name: 'islamic_utilities', path: '/islamic-utilities', title: 'Islamic Utilities Hub' },
  { name: 'namaz_timings', path: '/namaz-timings', title: 'Namaz Timings Utility' },
  { name: 'qibla_direction', path: '/qibla-direction', title: 'Qibla Compass & Calculation' },
  { name: 'trust_center', path: '/trust-center', title: 'Trust Center & AAOIFI Standards' },
  { name: 'security', path: '/security', title: 'Security & Data Governance' },
];

async function runAudit() {
  console.log('=== STARTING COMPREHENSIVE SITE AUDIT & SCREENSHOT SUITE ===');
  console.log(`Auditing target: ${baseUrl}`);
  console.log(`Artifact output directory: ${artifactDir}`);

  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const auditResults = [];

  for (const pageInfo of pagesToAuditAndScreenshot) {
    const page = await context.newPage();
    const url = `${baseUrl}${pageInfo.path}`;
    console.log(`\nAuditing [${pageInfo.title}] -> ${url}`);

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      const status = response ? response.status() : 0;

      // Extract SEO meta tags
      const meta = await page.evaluate(() => {
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'MISSING';
        const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || 'DEFAULT (index,follow)';
        const title = document.title || 'EMPTY';
        const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'EMPTY';
        const h1 = document.querySelector('h1')?.innerText?.trim() || 'NO H1';
        const favicon = document.querySelector('link[rel*="icon"]')?.getAttribute('href') || 'MISSING';
        return { canonical, robots, title, description, h1, favicon };
      });

      console.log(`  Status: ${status}`);
      console.log(`  Title: ${meta.title}`);
      console.log(`  Canonical: ${meta.canonical}`);
      console.log(`  Robots: ${meta.robots}`);
      console.log(`  H1: ${meta.h1.slice(0, 60)}...`);

      // Screenshot top hero (viewport)
      const screenshotFilename = `audit_screenshot_${pageInfo.name}.png`;
      const screenshotPath = path.join(artifactDir, screenshotFilename);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`  📸 Screenshot saved: ${screenshotFilename}`);

      auditResults.push({
        name: pageInfo.name,
        title: pageInfo.title,
        path: pageInfo.path,
        url,
        status,
        metaTitle: meta.title,
        canonical: meta.canonical,
        robots: meta.robots,
        h1: meta.h1,
        favicon: meta.favicon,
        screenshotFile: screenshotFilename,
        pass: status === 200 && !meta.robots.includes('noindex') && meta.canonical.startsWith('https://www.sidqly.com')
      });
    } catch (err) {
      console.error(`  ❌ Failed to audit ${url}: ${err.message}`);
      auditResults.push({
        name: pageInfo.name,
        title: pageInfo.title,
        path: pageInfo.path,
        url,
        status: 0,
        error: err.message,
        pass: false
      });
    } finally {
      await page.close();
    }
  }

  // Check language redirects
  console.log('\n--- VERIFYING MULTILINGUAL REDIRECTS ---');
  const redirectUrls = [
    { from: '/ur/locations/doha-islamic-charity-software', expectedTo: '/locations/doha-islamic-charity-software' },
    { from: '/ar/solutions/sadaqah-campaign-teams', expectedTo: '/solutions/sadaqah-campaign-teams' },
    { from: '/fr/legal/service-boundaries', expectedTo: '/legal/service-boundaries' },
    { from: '/de/modules/zakat-fund-separation', expectedTo: '/modules/zakat-fund-separation' },
    { from: '/locations/europe', expectedTo: '/regions/europe' },
    { from: '/locations/north-america', expectedTo: '/regions/north-america' },
  ];

  const redirectResults = [];
  for (const { from, expectedTo } of redirectUrls) {
    const page = await context.newPage();
    const url = `${baseUrl}${from}`;
    try {
      const response = await page.goto(url, { waitUntil: 'load', timeout: 20000 });
      const finalUrl = page.url();
      const status = response ? response.status() : 0;
      const pass = finalUrl.endsWith(expectedTo);
      console.log(`Redirect ${from} -> Final URL: ${finalUrl} (Status: ${status}) -> ${pass ? '✅ PASS' : '❌ FAIL'}`);
      redirectResults.push({ from, expectedTo, finalUrl, status, pass });
    } catch (e) {
      console.error(`Error checking redirect for ${from}: ${e.message}`);
      redirectResults.push({ from, expectedTo, error: e.message, pass: false });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  // Save audit data to JSON for artifact generation
  const reportData = {
    timestamp: new Date().toISOString(),
    pagesAudited: auditResults,
    redirectsAudited: redirectResults,
    totalAudited: auditResults.length,
    allPassed: auditResults.every(r => r.pass) && redirectResults.every(r => r.pass)
  };

  fs.writeFileSync(path.join(projectRoot, 'scripts', '.audit-results.json'), JSON.stringify(reportData, null, 2), 'utf8');
  console.log(`\n=== AUDIT COMPLETE: ${reportData.allPassed ? 'ALL TESTS PASSED ✅' : 'SOME TESTS FAILED ⚠️'} ===`);
}

runAudit().catch(err => {
  console.error('Audit suite crashed:', err);
  process.exit(1);
});
