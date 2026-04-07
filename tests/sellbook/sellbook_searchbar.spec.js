import { test, expect } from '@playwright/test';

test('Sell Book Search', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বেচার খাতা' }).click();
  await page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ').click();
  await page
    .getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ')
    .fill('01966866176');
  await page.getByText('+88').first().click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.locator('.fixed.inset-0').click();
  await page.getByText('+88').nth(1).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.locator('.fixed.inset-0').click();
  await page
    .locator(
      'tr:nth-child(10) > .py-space8.px-space12.text-text500.dark\\:text-text300.align-middle.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0.max-w-\\[400px\\] > span:nth-child(2)',
    )
    .click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.locator('.fixed.inset-0').click();
  await page
    .locator(
      'tr:nth-child(9) > .py-space8.px-space12.text-text500.dark\\:text-text300.align-middle.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0.max-w-\\[400px\\] > span:nth-child(2)',
    )
    .click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.getByText('01966866176', { exact: true }).click();
  await page.locator('.fixed.inset-0').click();
  await page.getByText('ggg').nth(5).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.getByText('01966866176', { exact: true }).click();
  await page.locator('.fixed.inset-0').click();
});
