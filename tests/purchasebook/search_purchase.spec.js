import { test, expect } from '@playwright/test';

test('Purchasebook Searchbar', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'কেনার খাতা' }).click();
  await page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ').click();
  await page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ').fill('antara');
  await page.getByText('antara').first().click();
  await page.locator('.fixed.inset-0').click();
  await page.getByText('antara').nth(1).click();
  await page.locator('.fixed.inset-0').click();
  await page.getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ').click();
  await page
    .getByPlaceholder('নাম অথবা মোবাইল দিয়ে খোঁজ করুন ')
    .fill('01966866176');
  await page.getByText('+88').first().click();
  await page.locator('.fixed.inset-0').click();
  await page.getByText('+88').nth(1).click();
  await page.locator('.fixed.inset-0').click();
});
