import { test, expect } from '@playwright/test';

const testLocations = [
  { path: '/locations/asia-pacific', type: 'Region', name: 'Asia Pacific' },
  { path: '/locations/pakistan', type: 'Country', name: 'Pakistan' },
  { path: '/locations/karachi-islamic-charity-software', type: 'City', name: 'Karachi' },
  { path: '/locations/dubai-islamic-charity-software', type: 'City', name: 'Dubai' },
  { path: '/locations/london-islamic-charity-software', type: 'City', name: 'London' }
];

test.describe('Location Page Realistic Use Cases', () => {

  for (const loc of testLocations) {
    test(`Location page ${loc.path} (${loc.type}) renders use case section correctly`, async ({ page }) => {
      await page.goto(loc.path);

      // Verify Use Case Title & Badge
      const useCaseHeading = page.locator('h2', { hasText: /Real-World Use Case|Example: How Sidqly Could Support/i }).first();
      await expect(useCaseHeading).toBeVisible();

      // Verify Operational Problem Statement
      const problemHeading = page.locator('h3', { hasText: /The Operational Challenge Before Sidqly|Operational Problem/i });
      await expect(problemHeading).toBeVisible();

      // Verify Workflow Steps Section
      const workflowHeading = page.locator('h3', { hasText: /Connected Operational Workflow/i });
      await expect(workflowHeading).toBeVisible();

      // Verify Step Cards exist
      const stepCards = page.locator('span', { hasText: /Step 01/i });
      await expect(stepCards.first()).toBeVisible();

      // Verify Module Links exist in steps
      const moduleLink = page.locator('a[href^="/modules/"]').first();
      await expect(moduleLink).toBeVisible();

      // Verify Operational Outcome Card
      const outcomeHeading = page.locator('h3', { hasText: /Expected Operational Outcome/i });
      await expect(outcomeHeading).toBeVisible();

      // Verify Relevant Sidqly Modules Section
      const relevantModulesHeading = page.locator('h3', { hasText: /Relevant Sidqly Modules/i });
      await expect(relevantModulesHeading).toBeVisible();

      // Verify Demo CTA button
      const demoCta = page.locator('a[href="/book-demo"]', { hasText: /Book a Demo/i }).first();
      await expect(demoCta).toBeVisible();
    });
  }

  test('Module link on Karachi use case page correctly navigates to module detail', async ({ page }) => {
    await page.goto('/locations/karachi-islamic-charity-software');

    // Click the Manual Payment Review module link
    const moduleLink = page.locator('a[href="/modules/manual-payment-review"]').first();
    await expect(moduleLink).toBeVisible();
    await moduleLink.click();

    await expect(page).toHaveURL(/\/modules\/manual-payment-review/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Karachi location page renders cleanly on mobile viewport (375x667) without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/locations/karachi-islamic-charity-software');

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // allow 1px rounding tolerance
  });

});
