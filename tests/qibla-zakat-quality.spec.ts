import { test, expect } from '@playwright/test';

test.describe('Phase 7.3 Qibla & Zakat Quality Tests', () => {
  const viewports = [
    { width: 375, height: 667, name: 'iPhone SE (375px)' },
    { width: 390, height: 844, name: 'iPhone 12/13/14 (390px)' },
    { width: 430, height: 932, name: 'iPhone 14/15 Pro Max (430px)' },
  ];

  const languages = [
    { code: 'en', path: '/qibla-direction', dir: 'ltr' },
    { code: 'ar', path: '/ar/qibla-direction', dir: 'rtl' },
    { code: 'ur', path: '/ur/qibla-direction', dir: 'rtl' },
  ];

  for (const lang of languages) {
    test(`Qibla tool renders correctly in ${lang.code.toUpperCase()} (${lang.dir})`, async ({ page }) => {
      await page.goto(lang.path);
      await expect(page.locator('html')).toHaveAttribute('dir', lang.dir);
      await expect(page.locator('h1')).toBeVisible();

      // Enter manual coordinates (lat: 31.5204, lng: 74.3587)
      const latInput = page.locator('input[placeholder*="31.5204"]');
      const lngInput = page.locator('input[placeholder*="74.3587"]');
      await latInput.fill('31.5204');
      await lngInput.fill('74.3587');
      await page.click('form button[type="submit"]');

      // Check bearing text output (260° for Lahore)
      await expect(page.getByText('260°')).toBeVisible();

      // Check no horizontal scroll bar
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll).toBe(false);
    });
  }

  for (const viewport of viewports) {
    test(`Zakat calculator renders on ${viewport.name} without overflow`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/zakat-calculator');

      await expect(page.locator('h1')).toContainText('Zakat Calculator');

      // Enter cash asset value
      const cashInput = page.locator('input[type="number"]').nth(1);
      await cashInput.fill('10000');

      await expect(page.locator('text=$10,000.00').first()).toBeVisible();

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
