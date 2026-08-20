import { test, expect } from '@playwright/test';

test.describe('Multilingual Architecture & i18n Foundation Tests', () => {
  test('Default root route renders in English (ltr)', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
    await expect(html).toHaveAttribute('dir', 'ltr');
  });

  test('Arabic prefix /ar sets lang="ar" and dir="rtl"', async ({ page }) => {
    await page.goto('/ar');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ar');
    await expect(html).toHaveAttribute('dir', 'rtl');

    // Check Arabic UI text in navbar
    await expect(page.locator('nav')).toContainText('العربية');
  });

  test('Urdu prefix /ur sets lang="ur" and dir="rtl"', async ({ page }) => {
    await page.goto('/ur');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ur');
    await expect(html).toHaveAttribute('dir', 'rtl');

    // Check Urdu UI text in navbar
    await expect(page.locator('nav')).toContainText('اردو');
  });

  test('Language Switcher allows switching between English, Arabic, and Urdu', async ({ page }) => {
    await page.goto('/features');

    // Open language switcher
    const switcherButton = page.locator('nav [data-testid="language-switcher-button"]').first();
    await switcherButton.click();

    // Select Arabic
    const arabicOption = page.locator('[data-testid="language-option-ar"]');
    await arabicOption.click();

    // Verify URL navigated to /ar/features and dir is rtl
    await page.waitForURL('**/ar/features');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

    // Switch to Urdu
    const arSwitcherButton = page.locator('nav [data-testid="language-switcher-button"]').first();
    await arSwitcherButton.click();

    const urduOption = page.locator('[data-testid="language-option-ur"]');
    await urduOption.click();

    await page.waitForURL('**/ur/features');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('Localized Location page renders translated content in Arabic and Urdu', async ({ page }) => {
    // English version
    await page.goto('/locations/makkah-islamic-charity-software');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    // Arabic version
    await page.goto('/ar/locations/makkah-islamic-charity-software');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('h1')).toContainText('مكة المكرمة');

    // Urdu version
    await page.goto('/ur/locations/karachi-islamic-charity-software');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('h1')).toContainText('کراچی');
  });
});
