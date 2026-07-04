import { test, expect } from '@playwright/test';

test.describe('Mobile UX Tests', () => {
  const BASE_URL = 'http://localhost:5173';
  const viewports = [
    { width: 375, height: 667 }, // iPhone SE
    { width: 390, height: 844 }, // iPhone 12/13/14
    { width: 430, height: 932 }, // iPhone 14/15 Pro Max
    { width: 768, height: 1024 } // iPad Mini
  ];

  const routes = [
    '/',
    '/features',
    '/modules',
    '/use-cases/qurbani-organizers',
    '/compare/mosque-website',
    '/book-demo',
    '/start-pilot',
    '/blog'
  ];

  for (const viewport of viewports) {
    test.describe(`Viewport ${viewport.width}x${viewport.height}`, () => {
      test.use({ viewport });

      for (const route of routes) {
        test(`Page ${route} renders without horizontal scroll`, async ({ page }) => {
          await page.goto(BASE_URL + route);

          // Check for horizontal overflow
          const horizontalScrollWidth = await page.evaluate(() => {
            return document.documentElement.scrollWidth - document.documentElement.clientWidth;
          });

          expect(horizontalScrollWidth).toBe(0);
        });
      }

      test(`Mobile menu works on ${viewport.width}x${viewport.height}`, async ({ page }) => {
         if (viewport.width > 1024) return;
         await page.goto(BASE_URL);
         await page.getByRole('button').filter({ has: page.locator('svg') }).nth(1).click();
         await expect(page.getByRole('navigation').getByRole('link', { name: 'Features' }).first()).toBeVisible();
      });
    });
  }
});
