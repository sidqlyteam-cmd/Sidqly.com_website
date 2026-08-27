import { test, expect } from '@playwright/test';

test.describe('Multilingual Architecture & i18n Foundation Tests', () => {
  test('Default root route renders in English (ltr) when browser language is English and no saved preference', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
    await expect(html).toHaveAttribute('dir', 'ltr');
  });

  test('Browser language detection: redirect to /ar when browser language is Arabic', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'ar-SA' });
    const page = await context.newPage();
    await page.goto('/features');
    await page.waitForURL('**/ar/features');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ar');
    await expect(html).toHaveAttribute('dir', 'rtl');
    await context.close();
  });

  test('Browser language detection: redirect to /fr when browser language is French', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'fr-FR' });
    const page = await context.newPage();
    await page.goto('/pricing');
    await page.waitForURL('**/fr/pricing');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'fr');
    await expect(html).toHaveAttribute('dir', 'ltr');
    await context.close();
  });

  test('Saved language preference: localStorage sidqly_lang="ur" redirects un-prefixed URL to /ur', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('sidqly_lang', 'ur'));
    await page.goto('/how-it-works');
    await page.waitForURL('**/ur/how-it-works');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ur');
    await expect(html).toHaveAttribute('dir', 'rtl');
  });

  test('Explicit language URL priority over saved localStorage preference', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('sidqly_lang', 'ar'));
    // Navigate explicitly to /fr/features
    await page.goto('/fr/features');
    await expect(page).toHaveURL(/\/fr\/features$/);
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'fr');
    await expect(html).toHaveAttribute('dir', 'ltr');
  });

  test('Explicit language URL priority over browser language preference', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'ar-SA' });
    const page = await context.newPage();
    // Navigate explicitly to /de/features
    await page.goto('/de/features');
    await expect(page).toHaveURL(/\/de\/features$/);
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'de');
    await expect(html).toHaveAttribute('dir', 'ltr');
    await context.close();
  });

  test('Manual language selection updates localStorage', async ({ page }) => {
    await page.goto('/features');
    const switcherButton = page.locator('nav [data-testid="language-switcher-button"]').first();
    await switcherButton.click();

    const germanOption = page.locator('[data-testid="language-option-de"]');
    await germanOption.click();

    await page.waitForURL('**/de/features');
    const savedLang = await page.evaluate(() => localStorage.getItem('sidqly_lang'));
    expect(savedLang).toBe('de');
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

  test('French prefix /fr sets lang="fr" and dir="ltr"', async ({ page }) => {
    await page.goto('/fr');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'fr');
    await expect(html).toHaveAttribute('dir', 'ltr');

    // Check French UI option display in navbar switcher button
    await expect(page.locator('nav')).toContainText('Français');
  });

  test('German prefix /de sets lang="de" and dir="ltr"', async ({ page }) => {
    await page.goto('/de');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'de');
    await expect(html).toHaveAttribute('dir', 'ltr');

    // Check German UI option display in navbar switcher button
    await expect(page.locator('nav')).toContainText('Deutsch');
  });

  test('Language Switcher allows switching between English, Arabic, Urdu, French, and German', async ({ page }) => {
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

    // Switch to French
    const urSwitcherButton = page.locator('nav [data-testid="language-switcher-button"]').first();
    await urSwitcherButton.click();

    const frenchOption = page.locator('[data-testid="language-option-fr"]');
    await frenchOption.click();

    await page.waitForURL('**/fr/features');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

    // Switch to German
    const frSwitcherButton = page.locator('nav [data-testid="language-switcher-button"]').first();
    await frSwitcherButton.click();

    const germanOption = page.locator('[data-testid="language-option-de"]');
    await germanOption.click();

    await page.waitForURL('**/de/features');
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
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

  test('All 6 Pakistan locations render correctly in Urdu with RTL, H1, and breadcrumbs', async ({ page }) => {
    const pkLocations = [
      { slug: 'karachi-islamic-charity-software', cityUrdu: 'کراچی' },
      { slug: 'lahore-islamic-charity-software', cityUrdu: 'لاہور' },
      { slug: 'islamabad-islamic-charity-software', cityUrdu: 'اسلام آباد' },
      { slug: 'rawalpindi-islamic-charity-software', cityUrdu: 'راولپنڈی' },
      { slug: 'faisalabad-islamic-charity-software', cityUrdu: 'فیصل آباد' },
      { slug: 'peshawar-islamic-charity-software', cityUrdu: 'پشاور' },
    ];

    for (const loc of pkLocations) {
      await page.goto(`/ur/locations/${loc.slug}`);

      // Verify HTML language and RTL direction
      await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
      await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

      // Verify H1 contains localized city name in Urdu
      await expect(page.locator('h1')).toContainText(loc.cityUrdu);

      // Verify Breadcrumbs elements in Urdu
      const breadcrumbNav = page.locator('nav[aria-label="Breadcrumb"]');
      await expect(breadcrumbNav).toBeVisible();
      await expect(breadcrumbNav.locator('a', { hasText: 'ہوم' })).toBeVisible();
      await expect(breadcrumbNav.locator('a', { hasText: 'پاکستان' })).toBeVisible();
      await expect(breadcrumbNav.locator('span[aria-current="page"]', { hasText: loc.cityUrdu })).toBeVisible();
    }
  });
});
