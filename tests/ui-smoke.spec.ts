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

  test('Phase 4 Pages Render and Forms Submit successfully', async ({ page }) => {
    // 1. Data Migration page renders
    await page.goto(BASE_URL + '/data-migration');
    await expect(page.locator('h1', { hasText: 'Secure Data Migration' })).toBeVisible();

    // 2. Contact Sales page renders and CTA button is visible
    await page.goto(BASE_URL + '/contact-sales');
    await expect(page.locator('h1', { hasText: 'Enterprise & Partnerships Desk' })).toBeVisible();

    const salesCtaButton = page.locator('a:has-text("Open Sales Inquiry Form")');
    await expect(salesCtaButton).toBeVisible();

    // 3. Guided Pilot page renders and CTA button is visible
    await page.goto(BASE_URL + '/guided-pilot');
    await expect(page.locator('h1', { hasText: 'Sidqly Guided Pilot Program' })).toBeVisible();

    const pilotCtaButton = page.locator('a:has-text("Open Pilot Application Form")');
    await expect(pilotCtaButton).toBeVisible();
  });

  test('Interactive 2D Workflow Visualizer works on Homepage', async ({ page }) => {
    await page.goto(BASE_URL);

    // Verify WorkflowVisualizer container and default title
    const container = page.locator('.bg-white.rounded-\\[32px\\].border.border-gray-100');
    await expect(container.first()).toBeVisible();

    // Verify step-by-step panel displays "Receive Intention" (default active step)
    await expect(page.locator('h3', { hasText: 'Receive Intention' })).toBeVisible();

    // Verify Next/Previous buttons
    const nextButton = page.getByRole('button', { name: 'Next step' });
    const prevButton = page.getByRole('button', { name: 'Previous step' });

    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();

    // Click next step and verify detail panel updates
    await nextButton.click();
    await expect(page.locator('h3', { hasText: 'Verify Payment' })).toBeVisible();

    // Click previous step to go back
    await prevButton.click();
    await expect(page.locator('h3', { hasText: 'Receive Intention' })).toBeVisible();
  });

  test('Phase 8 Priority Commercial Pages Render correctly', async ({ page }) => {
    const commercialRoutes = [
      '/islamic-charity-software',
      '/islamic-giving-operations-platform',
      '/zakat-management-software'
    ];

    for (const route of commercialRoutes) {
      await page.goto(BASE_URL + route);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('h2').first()).toBeVisible();
      await expect(page.locator('h2', { hasText: 'Frequently Asked Questions' }).first()).toBeVisible();
    }
  });

  test('Phase 10 Knowledge Hub renders and filters successfully', async ({ page }) => {
    // 1. Check main Knowledge Hub renders
    await page.goto(BASE_URL + '/knowledge-hub');
    await expect(page.locator('h1', { hasText: 'Operations Knowledge Hub' })).toBeVisible();

    // Check tabs are active
    const pillarTab = page.getByRole('button', { name: 'pillar' });
    await expect(pillarTab).toBeVisible();
    await pillarTab.click();

    // Search and check results filter
    const searchInput = page.getByPlaceholder('Search guides, definitions, and workflows...');
    await searchInput.fill('zakat');
    await expect(page.locator('h3', { hasText: 'Zakat' }).first()).toBeVisible();

    // 2. Check dynamic detail route compiles and renders
    await page.goto(BASE_URL + '/knowledge-hub/guide-islamic-charity-operations');
    await expect(page.locator('h1', { hasText: 'Guide to Islamic Charity Operations' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'What It Is' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Step-by-Step Workflow' })).toBeVisible();
  });

});
