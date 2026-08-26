import { test, expect } from '@playwright/test';

test.describe('Phase 7.5 Seasonal Tools Quality Tests', () => {
  test('Ramadan Planner renders and toggles confirmed status', async ({ page }) => {
    await page.goto('/ramadan-planner');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

    const statusBtn = page.locator('button[title*="astronomical"]');
    await expect(statusBtn).toBeVisible();
    await statusBtn.click();
    await expect(statusBtn).toContainText('Officially Confirmed');

    // Fasting goal checklist toggle
    const fastingGoalBtn = page.locator('button').filter({ hasText: 'Fasting Goal' }).first();
    await fastingGoalBtn.click();

    const savedStorage = await page.evaluate(() => localStorage.getItem('sidqly_ramadan_checklist'));
    expect(savedStorage).toBeTruthy();
    expect(savedStorage).toContain('"fastingGoal":true');
  });

  test('Eid / Qurbani Planner share tracking and validation works', async ({ page }) => {
    await page.goto('/eid-qurbani-planner');
    await expect(page.locator('h1')).toBeVisible();

    const participantInput = page.locator('input[type="number"]').first();
    await expect(participantInput).toBeVisible();
    await participantInput.fill('-5');

    await expect(page.getByText('Please enter valid positive numbers for participants and shares.')).toBeVisible();

    await participantInput.fill('14');
    await expect(page.getByText('Please enter valid positive numbers for participants and shares.')).toBeHidden();
  });

  test('Hajj Countdown timeline renders correctly', async ({ page }) => {
    await page.goto('/hajj-countdown');
    await expect(page.locator('h1')).toBeVisible();

    await expect(page.getByText('Operational Preparation Timeline')).toBeVisible();
    await expect(page.getByText('90 days before')).toBeVisible();
    await expect(page.getByText('10 days before')).toBeVisible();
  });

  test('Arabic RTL localization for Ramadan Planner (/ar/ramadan-planner)', async ({ page }) => {
    await page.goto('/ar/ramadan-planner');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('h1')).toContainText('رمضان');
  });

  test('Urdu RTL localization for Eid Planner (/ur/eid-qurbani-planner)', async ({ page }) => {
    await page.goto('/ur/eid-qurbani-planner');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('h1')).toContainText('عید');
  });

  test('Mobile viewport responsiveness (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const paths = ['/ramadan-planner', '/eid-qurbani-planner', '/hajj-countdown'];
    for (const p of paths) {
      await page.goto(p);
      await expect(page.locator('h1')).toBeVisible();
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    }
  });
});
