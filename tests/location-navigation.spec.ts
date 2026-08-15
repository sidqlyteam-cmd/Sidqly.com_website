import { test, expect } from '@playwright/test';

test.describe('Location Navigation and Information Architecture', () => {
  test('Locations Index displays clear Region -> Country -> City hierarchy', async ({ page }) => {
    await page.goto('/locations');

    // Verify page title
    await expect(page).toHaveTitle(/Global Service Areas/i);

    // Verify Level 1 Heading
    await expect(page.locator('h2', { hasText: '1. Global Regions' })).toBeVisible();

    // Verify Level 2 Heading
    await expect(page.locator('h2', { hasText: '2. Countries Organized by Region' })).toBeVisible();

    // Verify Level 3 Heading
    await expect(page.locator('h2', { hasText: '3. City Service Hubs by Country' })).toBeVisible();

    // Verify region link navigation
    const southAsiaLink = page.locator('a[href="/locations/south-asia"]').first();
    await expect(southAsiaLink).toBeVisible();

    // Verify country link navigation
    const pakistanLink = page.locator('a[href="/locations/pakistan"]').first();
    await expect(pakistanLink).toBeVisible();

    // Verify city link navigation
    const karachiLink = page.locator('a[href="/locations/karachi-islamic-charity-software"]').first();
    await expect(karachiLink).toBeVisible();
  });

  test('City page breadcrumb and hierarchy navigation (South Asia -> Pakistan -> Karachi)', async ({ page }) => {
    await page.goto('/locations/karachi-islamic-charity-software');

    // Verify Breadcrumb elements
    const breadcrumbNav = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumbNav).toBeVisible();
    await expect(breadcrumbNav.locator('a', { hasText: 'Home' })).toBeVisible();
    await expect(breadcrumbNav.locator('a', { hasText: 'Locations' })).toBeVisible();
    await expect(breadcrumbNav.locator('a', { hasText: 'South Asia' })).toBeVisible();
    await expect(breadcrumbNav.locator('a', { hasText: 'Pakistan' })).toBeVisible();
    await expect(breadcrumbNav.locator('span[aria-current="page"]', { hasText: 'Karachi' })).toBeVisible();

    // Verify Hierarchy Jump links
    await expect(page.locator('a', { hasText: 'View Pakistan' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Explore South Asia' })).toBeVisible();

    // Verify Related Locations section
    const relatedSection = page.locator('h3', { hasText: 'Related Service Areas & Locations' });
    await expect(relatedSection).toBeVisible();

    // Click parent country link 'View Pakistan' and verify navigation
    await page.click('a:has-text("View Pakistan")');
    await expect(page).toHaveURL(/\/locations\/pakistan/);

    // Verify Pakistan country page breadcrumb
    const countryBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(countryBreadcrumb.locator('a', { hasText: 'South Asia' })).toBeVisible();
    await expect(countryBreadcrumb.locator('span[aria-current="page"]', { hasText: 'Pakistan' })).toBeVisible();

    // Click parent region link 'Explore South Asia Region' and verify navigation
    await page.click('a:has-text("Explore South Asia Region")');
    await expect(page).toHaveURL(/\/locations\/south-asia/);

    // Verify Region breadcrumb
    const regionBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(regionBreadcrumb.locator('span[aria-current="page"]', { hasText: 'South Asia' })).toBeVisible();
  });

  test('Mobile viewport responsiveness for location navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/locations/london-islamic-charity-software');

    // Breadcrumb should be visible and scrollable without overflow breaking layout
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumb).toBeVisible();

    // Parent country action button visible on mobile
    const viewUkBtn = page.locator('a', { hasText: 'View United Kingdom' });
    await expect(viewUkBtn).toBeVisible();

    // Related locations section visible on mobile
    const relatedSection = page.locator('h3', { hasText: 'Related Service Areas & Locations' });
    await expect(relatedSection).toBeVisible();
  });
});
