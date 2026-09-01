import { test, expect } from '@playwright/test';

test.describe('Namaz Timings + Qibla Direction Same Page Integration', () => {
  const testCoords = { latitude: 31.5826, longitude: 74.3276 };

  test('clicking "Use My Location" updates BOTH Namaz timings and Qibla direction on the SAME page', async ({ page, context }) => {
    // 1. Grant geolocation permissions and set test coordinates
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation(testCoords);

    // Track console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // 2. Navigate to Namaz Timings page
    await page.goto('/namaz-timings');
    await expect(page.locator('h1')).toContainText('Namaz Timings');

    // 3. Click "Use My Location" button
    const useLocationButton = page.getByRole('button', { name: /Use My Location/i });
    await expect(useLocationButton).toBeVisible();
    await useLocationButton.click();

    // 4. Verify "Your Location" badge displays coordinates
    await expect(page.getByText('31.5826°, 74.3276°')).toBeVisible({ timeout: 10000 });

    // 5. Verify Prayer Timings are rendered
    await expect(page.getByText('Fajr', { exact: true })).toBeVisible();
    await expect(page.getByText('Dhuhr', { exact: true })).toBeVisible();
    await expect(page.getByText('Asr', { exact: true })).toBeVisible();
    await expect(page.getByText('Maghrib', { exact: true })).toBeVisible();
    await expect(page.getByText('Isha', { exact: true })).toBeVisible();

    // 6. Verify Qibla Direction is rendered on the SAME page
    await expect(page.getByText('Qibla Bearing')).toBeVisible();
    await expect(page.getByText(/26[0-2]°/)).toBeVisible();

    // 7. Verify no console errors occurred
    expect(consoleErrors).toEqual([]);
  });

  test('verifies RTL layouts for Arabic and Urdu on the same page', async ({ page, context }) => {
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation(testCoords);

    // Arabic test
    await page.goto('/ar/namaz-timings');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

    const arUseLocationBtn = page.getByRole('button', { name: /موقعي|استخدام موقعي|Use My Location/i });
    await expect(arUseLocationBtn).toBeVisible();
    await arUseLocationBtn.click();

    await expect(page.getByText('31.5826°, 74.3276°')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/26[0-2]°/)).toBeVisible();

    // Urdu test
    await page.goto('/ur/namaz-timings');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

    const urUseLocationBtn = page.getByRole('button', { name: /میرا مقام|مقام استعمال کریں|Use My Location/i });
    await expect(urUseLocationBtn).toBeVisible();
    await urUseLocationBtn.click();

    await expect(page.getByText('31.5826°, 74.3276°')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/26[0-2]°/)).toBeVisible();
  });
});
