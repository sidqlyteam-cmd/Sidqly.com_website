import { test, expect } from '@playwright/test';

const TEST_WIDTHS = [
  { width: 1024, height: 768, label: '1024px Desktop' },
  { width: 1280, height: 800, label: '1280px Desktop' },
  { width: 1440, height: 900, label: '1440px Desktop' },
  { width: 1920, height: 1080, label: '1920px Desktop' },
];

const LANGUAGES = [
  { prefix: '', lang: 'en', dir: 'ltr' },
  { prefix: '/ar', lang: 'ar', dir: 'rtl' },
  { prefix: '/ur', lang: 'ur', dir: 'rtl' },
];

test.describe('Desktop Responsive Navbar & Layout Tests', () => {
  for (const langConfig of LANGUAGES) {
    for (const viewport of TEST_WIDTHS) {
      test(`Navbar & Layout rendered cleanly at ${viewport.label} in ${langConfig.lang.toUpperCase()} (${langConfig.dir})`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(langConfig.prefix || '/');
        await page.waitForLoadState('networkidle');

        // Verify HTML dir and lang
        const htmlDir = await page.getAttribute('html', 'dir');
        expect(htmlDir).toBe(langConfig.dir);

        // Verify no horizontal overflow
        const overflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        expect(overflow).toBe(false);

        // Verify Brand Logo is visible
        const logo = page.locator('nav img[alt="Sidqly"]');
        await expect(logo).toBeVisible();

        // Verify Language Switcher button is visible in navbar
        const langSwitcher = page.locator('nav [data-testid="language-switcher-button"]').first();
        await expect(langSwitcher).toBeVisible();

        // Verify Search and Theme buttons are visible in navbar
        const searchBtn = page.locator('nav button[aria-label="Search"]').first();
        const themeBtn = page.locator('nav button[aria-label="Toggle Theme"]').first();
        await expect(searchBtn).toBeVisible();
        await expect(themeBtn).toBeVisible();

        // Verify CTA button is visible and not clipped inside navbar
        const bookDemoCta = page.locator('nav a[href*="calendly.com"]').first();
        await expect(bookDemoCta).toBeVisible();

        const ctaBox = await bookDemoCta.boundingBox();
        expect(ctaBox).not.toBeNull();
        if (ctaBox) {
          expect(ctaBox.width).toBeGreaterThan(0);
          expect(ctaBox.x).toBeGreaterThanOrEqual(-1);
          expect(ctaBox.x + ctaBox.width).toBeLessThanOrEqual(viewport.width + 1);
        }
      });
    }
  }
});
