import { test, expect } from '@playwright/test';

test('transaction_history_delete', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বেচার খাতা' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('menuitem', { name: 'মুছে ফেলুন' }).click();
  await page.getByText('Transaction Delete').click();
  await page.getByText('Are you sure you want to').click();
  await page.getByText('You will not able to save').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByText('Transaction was successfully').click();
});
