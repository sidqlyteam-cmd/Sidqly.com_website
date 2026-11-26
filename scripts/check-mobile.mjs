import { chromium, devices } from 'playwright';
import fs from 'fs';

const artifactDir = 'C:/Users/ahesh/.gemini/antigravity/brain/f350007e-a9a7-425e-ba9f-cafca4680e05';

async function auditMobile() {
  const browser = await chromium.launch({ headless: true });
  const iPhone = devices['iPhone 13']; // 390x844
  const context = await browser.newContext({
    ...iPhone,
  });

  const page = await context.newPage();
  const routes = [
    { name: 'home', url: 'https://www.sidqly.com/' },
    { name: 'pricing', url: 'https://www.sidqly.com/pricing' },
    { name: 'purchase', url: 'https://www.sidqly.com/purchase' },
    { name: 'features', url: 'https://www.sidqly.com/features' },
    { name: 'modules', url: 'https://www.sidqly.com/modules' },
  ];

  const report = [];

  for (const r of routes) {
    console.log(`Checking ${r.url}...`);
    await page.goto(r.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);

    const metrics = await page.evaluate(() => {
      const viewportMeta = document.querySelector('meta[name="viewport"]')?.getAttribute('content') || 'MISSING';
      const innerWidth = window.innerWidth;
      const docScrollWidth = document.documentElement.scrollWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      const hasHorizontalOverflow = docScrollWidth > innerWidth || bodyScrollWidth > innerWidth;

      // Find overflowing elements
      const overflowing = [];
      if (hasHorizontalOverflow) {
        const all = document.querySelectorAll('*');
        for (const el of all) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.right > innerWidth + 1) {
            const tag = el.tagName.toLowerCase();
            const cls = (typeof el.className === 'string' ? el.className : '').slice(0, 80);
            overflowing.push({ tag, cls, right: Math.round(rect.right), width: Math.round(rect.width) });
            if (overflowing.length >= 15) break;
          }
        }
      }

      // Check touch targets (buttons & links inside main/nav/footer)
      const smallTargets = [];
      const interactives = document.querySelectorAll('a, button, input, select');
      for (const el of interactives) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && (rect.height < 32 || rect.width < 24)) {
          const text = (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30);
          smallTargets.push({ tag: el.tagName.toLowerCase(), text, w: Math.round(rect.width), h: Math.round(rect.height) });
        }
      }

      // Check fixed elements
      const fixedEls = [];
      for (const el of document.querySelectorAll('*')) {
        const style = getComputedStyle(el);
        if (style.position === 'fixed') {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            fixedEls.push({
              tag: el.tagName.toLowerCase(),
              cls: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
              top: Math.round(rect.top),
              bottom: Math.round(rect.bottom),
              height: Math.round(rect.height),
              width: Math.round(rect.width),
            });
          }
        }
      }

      return {
        viewportMeta,
        innerWidth,
        docScrollWidth,
        bodyScrollWidth,
        hasHorizontalOverflow,
        overflowing,
        smallTargetCount: smallTargets.length,
        sampleSmallTargets: smallTargets.slice(0, 10),
        fixedEls,
      };
    });

    const shotPath = `${artifactDir}/mobile_audit_${r.name}.png`;
    await page.screenshot({ path: shotPath, fullPage: false });

    // Also test mobile menu on home page
    if (r.name === 'home') {
      const menuBtn = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], header button').last();
      if (await menuBtn.count() > 0) {
        await menuBtn.click();
        await page.waitForTimeout(300);
        await page.screenshot({ path: `${artifactDir}/mobile_audit_menu_open.png`, fullPage: false });
      }
    }

    // For purchase page, scroll to #inquiry and capture
    if (r.name === 'purchase') {
      const form = await page.$('#inquiry');
      if (form) {
        await form.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await page.screenshot({ path: `${artifactDir}/mobile_audit_purchase_form.png`, fullPage: false });
      }
    }

    report.push({ route: r.name, url: r.url, ...metrics });
  }

  // Also check 360px narrow Android viewport on home & pricing
  await page.setViewportSize({ width: 360, height: 800 });
  for (const url of ['https://www.sidqly.com/', 'https://www.sidqly.com/pricing', 'https://www.sidqly.com/purchase']) {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const narrow = await page.evaluate(() => ({
      innerWidth: window.innerWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      overflow: document.documentElement.scrollWidth > window.innerWidth,
    }));
    report.push({ route: `360px_${url}`, ...narrow });
  }

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
}

auditMobile().catch(err => {
  console.error(err);
  process.exit(1);
});
