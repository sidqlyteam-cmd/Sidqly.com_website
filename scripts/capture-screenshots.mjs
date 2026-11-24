import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

async function capture() {
  const browser = await chromium.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--host-resolver-rules=MAP www.sidqly.com 104.21.56.2, MAP sidqly.com 104.21.56.2'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const page = await context.newPage();

  // 1. Screenshot of www.sidqly.com resolved via Cloudflare
  console.log('Navigating to https://www.sidqly.com via Cloudflare...');
  await page.goto('https://www.sidqly.com', { waitUntil: 'networkidle', timeout: 30000 });
  const wwwScreenshot = path.join(projectRoot, 'screenshot_www_sidqly.png');
  await page.screenshot({ path: wwwScreenshot, fullPage: false });
  console.log('Saved:', wwwScreenshot);

  // 2. Also take a mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  const mobileScreenshot = path.join(projectRoot, 'screenshot_mobile_sidqly.png');
  await page.screenshot({ path: mobileScreenshot, fullPage: false });
  console.log('Saved mobile:', mobileScreenshot);

  await browser.close();
  console.log('Done capturing live screenshots.');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
