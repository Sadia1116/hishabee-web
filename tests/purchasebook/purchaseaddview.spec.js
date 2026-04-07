import { test, expect } from '@playwright/test';

test('Purchase add view', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'কেনা', exact: true }).click();
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('.text-sm.w-14').click();
  await page.getByRole('button', { name: 'নগদ টাকা' }).click();
  await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();
  await page.getByText('Successful').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'কেনার খাতা' }).click();
  await page.getByRole('cell', { name: 'K896E02' }).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.getByRole('button', { name: 'Close' }).click();
});
