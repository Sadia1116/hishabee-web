import { test, expect } from '@playwright/test';

test('Edit purchase book', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.locator('#current_password').click();
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'কেনার খাতা' }).click();
  await page.getByRole('cell', { name: 'EJN7PNY' }).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.getByRole('button', { name: 'Return Product' }).click();
  await page.getByText('Notes').click();
  await page.getByRole('button', { name: 'কেনাকাটা এডিট' }).click();
  await page.getByRole('button', { name: 'কেনাকাটা এডিট' }).click();
  await page.getByText('Notes').click();
  await page.getByText('মুছে ফেলুন কেনাকাটা এডিট').click();
  await page.getByRole('button', { name: 'মুছে ফেলুন' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByText('Purchase was successfully').click();
});
