import { test, expect } from '@playwright/test';

test('duebook_searchbar', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বাকির খাতা' }).click();
  await page.getByPlaceholder('কন্টাক্ট খোঁজ করুন').click();
  await page.getByPlaceholder('কন্টাক্ট খোঁজ করুন').fill('test');
  await page.getByText('test').nth(5).click();
  await page.getByText('সাপ্লায়ার').click();
  await page.getByText('feb test (purchase)').click();
  await page.getByText('কর্মচারী').click();
  await page.getByText('আপনার কোন লেনদেন নেই').click();
});
