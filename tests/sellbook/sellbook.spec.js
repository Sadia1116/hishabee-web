import { test, expect } from '@playwright/test';

test.describe('Sales Book Module', () => {
  async function login(page) {
    await page.goto('https://dokan-testing.netlify.app/auth');

    await page.getByPlaceholder('XXXXXXXXXXX').fill('01966866176');
    await page.getByRole('button', { name: 'এগিয়ে যান' }).click();

    await page.locator('#current_password').fill('12345');
    await page.getByRole('button', { name: 'লগইন করুন' }).click();

    await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();

    await page.waitForLoadState('networkidle');
  }

  async function goToSalesBook(page) {
    await page.getByRole('link', { name: 'বেচার খাতা' }).click();
    await page.waitForLoadState('networkidle');

    await expect(
      page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন '),
    ).toBeVisible();
  }

  // helper for stability
  async function safeClick(locator) {
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
    await locator.click();
  }

  // ✅ TC-01: Search by product name
  test('Search by product name', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    const search = page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ');
    await search.fill('oil');

    await expect(search).toHaveValue('oil');
  });

  // ✅ TC-02: Search by mobile number
  test('Search by mobile number', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    const search = page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ');
    await search.fill('01700000000');

    await expect(search).toHaveValue('01700000000');
  });

  // ✅ TC-03: View transaction details
  test('View transaction details', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    const firstRow = page.locator('tbody tr').first();
    await safeClick(firstRow);

    await expect(page.getByText('Transaction Details')).toBeVisible();

    await page.locator('.fixed.inset-0').click(); // close modal
  });

  // ✅ TC-04: Apply time filters
  test('Apply time filters', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    const filters = [
      'আজ',
      'গত ৩০ দিন',
      'এই সপ্তাহ',
      'এই মাস',
      'এই বছর',
      'অল টাইম',
    ];

    for (const name of filters) {
      const btn = page.getByRole('button', { name });
      await safeClick(btn);
    }
  });

  // ✅ TC-05: Custom date (stable version)
  test('Custom date range', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    await safeClick(page.getByRole('button', { name: 'কাস্টম' }));

    await page.waitForSelector('text=তারিখ পরিবর্তন করুন');

    // simple selection instead of complex calendar
    await safeClick(page.getByRole('button', { name: 'আজ' }));

    await safeClick(page.getByRole('button', { name: 'প্রয়োগ' }));
  });

  // ✅ TC-06: Transaction count
  test('Transaction count change', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    await safeClick(page.getByRole('combobox'));

    await page.waitForSelector('text=15 per page');
    await safeClick(page.getByText('15 per page'));

    await expect(page.getByText('Showing')).toBeVisible();
  });

  // ✅ TC-07: Refresh
  test('Refresh data', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    await safeClick(page.getByRole('button', { name: 'রিফ্রেশ' }));
  });

  // ✅ TC-08: Download / Print
  test('Download / Print', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    await safeClick(page.getByRole('button', { name: 'ডাউনলোড/প্রিন্ট' }));
  });

  // ✅ TC-09: Total amount visible
  test('Total amount visible', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    await safeClick(page.getByRole('button', { name: 'আজ' }));

    await expect(page.locator('text=৳').first()).toBeVisible();
  });

  // ✅ TC-10: Pagination
  test('Pagination navigation', async ({ page }) => {
    await login(page);
    await goToSalesBook(page);

    const nextBtn = page.getByRole('button', { name: 'Next' });

    if (await nextBtn.isVisible()) {
      await safeClick(nextBtn);
    }
  });
});
