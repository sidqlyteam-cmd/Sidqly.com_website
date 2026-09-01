import { test, expect } from '@playwright/test';

test.describe('Namaz Translator / Salah Meaning Tool E2E Tests', () => {
  test('Page loads successfully in English default route', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/namaz-translator');
    await expect(page.locator('h1')).toContainText('Namaz Translator');
    await expect(page.getByRole('heading', { name: 'Surah Al-Fatihah - Verse 2' })).toBeVisible();

    // Verify links to Namaz Timings & Qibla Direction
    const timingsLink = page.locator('main a[href*="/namaz-timings"]').first();
    const qiblaLink = page.locator('main a[href*="/qibla-direction"]').first();
    await expect(timingsLink).toBeVisible();
    await expect(qiblaLink).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Section selection and filtering', async ({ page }) => {
    await page.goto('/namaz-translator');

    // Filter by Ruku section via dropdown
    const sectionSelect = page.locator('select');
    await sectionSelect.selectOption('ruku');

    await expect(page.getByRole('heading', { name: 'Ruku Recitation (Subhana Rabbiyal-A\'dheem)' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Surah Al-Fatihah - Verse 2' })).not.toBeVisible();
  });

  test('Search functionality and word-by-word breakdown toggle', async ({ page }) => {
    await page.goto('/namaz-translator');

    // Filter by Fatihah section
    const sectionSelect = page.locator('select');
    await sectionSelect.selectOption('fatihah');

    await expect(page.getByRole('heading', { name: 'Surah Al-Fatihah - Verse 2' })).toBeVisible();

    // Toggle word-by-word breakdown on Verse 2
    const breakdownButton = page.locator('button:has-text("Show Word-by-Word Breakdown")').first();
    await breakdownButton.click();

    await expect(page.getByText('All praise').first()).toBeVisible();
  });

  test('Transliteration and Translation visibility toggles', async ({ page }) => {
    await page.goto('/namaz-translator');

    // Click Transliteration toggle
    const transliterationToggle = page.locator('button:has-text("Transliteration")');
    await transliterationToggle.click();

    // Verify transliteration container hidden
    await expect(page.locator('text=Al-ḥamdu lillāhi')).not.toBeVisible();

    // Click again to show
    await transliterationToggle.click();
    await expect(page.locator('text=Al-ḥamdu lillāhi')).toBeVisible();
  });

  test('Arabic RTL and Urdu RTL language switching', async ({ page }) => {
    await page.goto('/ar/namaz-translator');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('h1')).toContainText('مترجم أذكار الصلاة');

    await page.goto('/ur/namaz-translator');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('h1')).toContainText('نماز کا ترجمہ');
  });

  test('French and German language routes load correctly', async ({ page }) => {
    await page.goto('/fr/namaz-translator');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('Traducteur de Namaz');

    await page.goto('/de/namaz-translator');
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    await expect(page.locator('h1')).toContainText('Namaz-Übersetzer');
  });

  test('Mobile responsiveness and layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/namaz-translator');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('select')).toBeVisible();
    await expect(page.locator('input[type="text"]')).toBeVisible();
  });
});
