import { test, expect } from '@playwright/test';

test.describe('Purchase Book Module', () => {
  async function login(page) {
    await page.goto('https://dokan-testing.netlify.app/auth');
    await page.getByPlaceholder('XXXXXXXXXXX').fill('01966866176');
    await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
    await page.locator('#current_password').fill('12345');
    await page.getByRole('button', { name: 'লগইন করুন' }).click();
    await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  }

  async function goToPurchaseBook(page) {
    await page.getByRole('link', { name: 'কেনার খাতা' }).click();

    await expect(
      page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন '),
      'Expected: Purchase Book page loaded',
    ).toBeVisible();
  }

  // ✅ TC-01: Search (Name / Mobile)
  test('TC-01: Search functionality', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page
      .getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ')
      .fill('019668');

    await expect(
      page.getByText('কোন ডেটা নেই'),
      'Expected: No data message for invalid search',
    ).toBeVisible();
  });

  // ✅ TC-02: Time Filters
  test('TC-02: Time filter options', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    const filters = [
      'আজ',
      'গত ৩০ দিন',
      'এই সপ্তাহ',
      'এই মাস',
      'এই বছর',
      'অল টাইম',
    ];

    for (const filter of filters) {
      await page.getByRole('button', { name: filter }).click();

      await expect(
        page.getByRole('button', { name: filter }),
        `Expected: ${filter} applied`,
      ).toBeVisible();
    }
  });

  // ✅ TC-03: Custom Date Range
  test('TC-03: Custom date filter', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('button', { name: 'কাস্টম' }).click();

    await page.getByRole('button', { name: 'শুরুর তারিখ শেষের তারিখ' }).click();
    await page.getByRole('button', { name: /April 1st/ }).click();
    await page.getByRole('button', { name: /Apr 30/ }).click();

    await page.getByRole('button', { name: 'প্রয়োগ' }).click();
  });

  // ✅ TC-04: Transaction Count
  test('TC-04: Transaction per page', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('combobox').click();
    await page.getByText('15 per page').click();

    await expect(
      page.getByText('Showing 1 to'),
      'Expected: Pagination updated',
    ).toBeVisible();
  });

  // ✅ TC-05: Refresh
  test('TC-05: Refresh button', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('button', { name: 'রিফ্রেশ' }).click();
  });

  // ✅ TC-06: Total Purchase Display
  test('TC-06: Total purchase amount visible', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await expect(
      page.locator('text=৳'),
      'Expected: Total amount should be visible',
    ).toBeVisible();
  });

  // ✅ TC-07: Sorting Columns
  test('TC-07: Column sorting', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    const columns = [
      'যোগাযোগ',
      'ইনভয়েস নং',
      'ব্যাচ নং',
      'আইটেম',
      'টাকার পরিমান',
      'তারিখ',
    ];

    for (const col of columns) {
      await page.getByRole('columnheader', { name: col }).click();
    }
  });

  // ✅ TC-08: View Transaction Details
  test('TC-08: View transaction details', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('cell').first().click();

    await expect(
      page.getByText('Transaction Details'),
      'Expected: Details modal should open',
    ).toBeVisible();

    await page.getByRole('button', { name: 'Close' }).click();
  });

  // ✅ TC-09: Delete Transaction
  test('TC-09: Delete transaction', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('button').nth(3).click();
    await page.getByRole('menuitem', { name: 'মুছে ফেলুন' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
  });

  // ✅ TC-10: Pagination Navigation
  test('TC-10: Pagination', async ({ page }) => {
    await login(page);
    await goToPurchaseBook(page);

    await page.getByRole('combobox').click();
    await page.getByText('50 per page').click();

    await expect(
      page.getByText('Showing 1 to50'),
      'Expected: Pagination updated to 50',
    ).toBeVisible();
  });
});
