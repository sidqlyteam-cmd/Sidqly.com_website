import { execSync } from 'child_process';
import fs from 'fs';
import { chromium } from 'playwright';

console.log('1. Building website...');
execSync('npm run build', { stdio: 'inherit' });
console.log('Build succeeded!');

console.log('2. Deploying to Cloudflare Pages...');
const envFile = fs.readFileSync('.env', 'utf-8');
const env = { ...process.env };
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const idx = trimmed.indexOf('=');
    if (idx !== -1) env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
}

const out = execSync('npx wrangler pages deploy dist --project-name=sidqly --branch=main --commit-dirty=true', {
  env,
  encoding: 'utf-8'
});
console.log(out);

console.log('3. Waiting for deployment propagation (5 seconds)...');
await new Promise(r => setTimeout(r, 5000));

console.log('4. Capturing screenshots...');
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
});

const page = await context.newPage();

await page.goto('https://www.sidqly.com/purchase', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({
  path: 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_purchase.png',
  fullPage: false
});

const form = await page.$('#inquiry');
if (form) {
  await form.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_inquiry_form.png',
    fullPage: false
  });
}

await page.goto('https://www.sidqly.com/pricing', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({
  path: 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_pricing.png',
  fullPage: false
});

await browser.close();
console.log('All done successfully!');
