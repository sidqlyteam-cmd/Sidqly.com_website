import { test, expect } from '@playwright/test';

test.describe('Sidqly UI Smoke Tests', () => {

  const BASE_URL = 'http://localhost:5173';

  test('Core Routes Render correctly', async ({ page }) => {
    const routes = ['/', '/use-cases', '/resources', '/modules', '/islamic-utilities', '/sitemap'];
    for (const route of routes) {
      await page.goto(BASE_URL + route);
      await expect(page.locator('h1').first() ?? page.locator('h2').first()).toBeVisible();
      await expect(page.locator('nav').first()).toBeVisible();
      await expect(page.locator('footer').first()).toBeVisible();
    }
  });

  test('Use Case Detail Pages Render correctly', async ({ page }) => {
    const useCases = [
      '/use-cases/mosques',
      '/use-cases/islamic-charities',
      '/use-cases/zakat-committees',
      '/use-cases/qurbani-organizers',
      '/use-cases/ramadan-ration-teams',
      '/use-cases/sadaqah-campaign-teams',
      '/use-cases/corporate-sponsors',
      '/use-cases/donors',
      '/use-cases/volunteers',
      '/use-cases/vendors',
      '/use-cases/board-reporting-teams',
      '/use-cases/community-request-organization'
    ];

    for (const useCase of useCases) {
      await page.goto(BASE_URL + useCase);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('h2', { hasText: 'The Challenge' }).first()).toBeVisible();
      await expect(page.locator('h2', { hasText: 'The Sidqly Workflow' }).first()).toBeVisible();
      await expect(page.getByText('Back to all use cases').first()).toBeVisible();
    }
  });

  test('Global Search Modal works', async ({ page }) => {
    await page.goto(BASE_URL);

    // Open modal by clicking search button
    await page.getByRole('button', { name: 'Search' }).first().click();

    const searchInput = page.getByPlaceholder('Search Qurbani, Zakat, Qibla, Ramadan, proof, reports...');
    await expect(searchInput).toBeVisible();

    const queries = ['qurbani', 'mosque'];
    for (const query of queries) {
      await searchInput.fill(query);
      await page.waitForTimeout(500); // Wait for results
      // Assuming results appear as list items or links
      await expect(page.locator('a.group').first()).toBeVisible();
    }

    // Close modal
    await page.keyboard.press('Escape');
    await expect(searchInput).not.toBeVisible();
  });

});
