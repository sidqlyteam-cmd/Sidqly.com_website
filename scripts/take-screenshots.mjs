import { chromium } from 'playwright';

async function snap() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });

  const page = await context.newPage();

  console.log('1. Navigating to https://www.sidqly.com/purchase...');
  await page.goto('https://www.sidqly.com/purchase', { waitUntil: 'networkidle', timeout: 30000 });

  const destPurchase = 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_purchase.png';
  await page.screenshot({ path: destPurchase, fullPage: false });
  console.log('Saved:', destPurchase);

  const formElement = await page.$('#inquiry');
  if (formElement) {
    await formElement.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const destForm = 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_inquiry_form.png';
    await page.screenshot({ path: destForm, fullPage: false });
    console.log('Saved:', destForm);
  }

  console.log('2. Navigating to https://www.sidqly.com/pricing...');
  await page.goto('https://www.sidqly.com/pricing', { waitUntil: 'networkidle', timeout: 30000 });
  const destPricing = 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05/screenshot_live_pricing.png';
  await page.screenshot({ path: destPricing, fullPage: false });
  console.log('Saved:', destPricing);

  await browser.close();
  console.log('Screenshots complete!');
}

snap().catch(console.error);
