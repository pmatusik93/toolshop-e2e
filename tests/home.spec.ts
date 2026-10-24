import { test, expect } from '@playwright/test';

  test('strona główna ma poprawny tytuł w zakładce', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Practice Software Testing/);
  });

  test('strona główna pokazuje listę produktów', async ({ page }) => {
    await page.goto('/');
    const products = page.locator('a.card');
    await expect(products.first()).toBeVisible();
    await expect(products).not.toHaveCount(0);
  });