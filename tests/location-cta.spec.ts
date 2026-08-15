import { test, expect } from '@playwright/test';

const sampleLocations = [
  {
    path: '/locations/asia-pacific',
    type: 'Region',
    name: 'Asia Pacific',
    expectedFinalCtaHeading: /Explore Sidqly modules for organizations in Asia Pacific/i
  },
  {
    path: '/locations/pakistan',
    type: 'Country',
    name: 'Pakistan',
    expectedFinalCtaHeading: /See how Sidqly can support organizations across Pakistan/i
  },
  {
    path: '/locations/karachi-islamic-charity-software',
    type: 'City',
    name: 'Karachi',
    expectedFinalCtaHeading: /Ready to improve your charity operations in Karachi\?/i
  }
];

test.describe('Location Page Calls-to-Action (CTAs)', () => {

  for (const loc of sampleLocations) {
    test(`Location page ${loc.path} (${loc.type}) has clear, accessible, and relevant CTAs`, async ({ page }) => {
      await page.goto(loc.path);

      // 1. Hero Section CTAs
      const heroPrimaryCta = page.locator('section').first().locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).first();
      await expect(heroPrimaryCta).toBeVisible();

      // Hero Secondary CTA points to valid route (/use-cases or /modules)
      const heroSecondaryCta = page.locator('section').first().locator('a[href="/use-cases"], a[href="/modules"]').first();
      await expect(heroSecondaryCta).toBeVisible();

      // 2. Mid-Page CTA Banner
      const midPageHeading = page.locator('h3', { hasText: /Ready to streamline giving operations|Ready to solve these giving operational challenges/i }).first();
      await expect(midPageHeading).toBeVisible();

      const midPageDemoCta = page.locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).nth(1);
      await expect(midPageDemoCta).toBeVisible();

      // 3. Relevant Modules Section Secondary CTA
      const modulesSecondaryCta = page.locator('a[href="/modules"]', { hasText: /Explore All Sidqly Modules/i }).first();
      await expect(modulesSecondaryCta).toBeVisible();

      // 4. Location-Specific Final CTA Block
      const finalCtaHeading = page.locator('h2', { hasText: loc.expectedFinalCtaHeading }).first();
      await expect(finalCtaHeading).toBeVisible();

      const finalPrimaryCta = page.locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).last();
      await expect(finalPrimaryCta).toBeVisible();

      const finalSecondaryCta = page.locator('a[href="/product-tour"]', { hasText: /See How Sidqly Works/i }).first();
      await expect(finalSecondaryCta).toBeVisible();
    });
  }

  test('Primary and Secondary CTA links navigate to valid existing routes without 404s', async ({ page }) => {
    await page.goto('/locations/karachi-islamic-charity-software');

    // Click Hero Primary CTA "Book a Demo"
    const heroBookDemo = page.locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).first();
    await heroBookDemo.click();
    await expect(page).toHaveURL(/\/book-demo/);
    await expect(page.locator('h1')).toBeVisible();

    // Go back and test Hero Secondary CTA
    await page.goto('/locations/karachi-islamic-charity-software');
    const heroSecondary = page.locator('a[href="/use-cases"]', { hasText: /Explore Karachi Use Cases/i }).first();
    await heroSecondary.click();
    await expect(page).toHaveURL(/\/use-cases/);
    await expect(page.locator('h1')).toBeVisible();

    // Go back and test Modules Section Secondary CTA
    await page.goto('/locations/karachi-islamic-charity-software');
    const modulesCta = page.locator('a[href="/modules"]', { hasText: /Explore All Sidqly Modules/i }).first();
    await modulesCta.click();
    await expect(page).toHaveURL(/\/modules/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Location page CTAs render cleanly on mobile viewports (375x667) without overlap or overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/locations/karachi-islamic-charity-software');

    // Check Hero CTAs on mobile
    const heroPrimary = page.locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).first();
    await expect(heroPrimary).toBeVisible();

    // Verify horizontal overflow on mobile is within acceptable bounds
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

});
