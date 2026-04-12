import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.locator('#current_password').click();
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'খরচের খাতা' }).click();
  await page.getByRole('button', { name: 'নতুন খরচ' }).click();
  await page.getByRole('combobox', { name: 'ক্যাটাগরির নাম *' }).click();
  await page.getByTitle('কেনা').click();
  await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).click();
  await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).fill('500');
  await page.getByRole('textbox', { name: 'খরচের কারণ' }).click();
  await page.getByRole('textbox', { name: 'খরচের কারণ' }).click();
  await page.getByRole('textbox', { name: 'খরচের কারণ' }).fill('pen');
  await page.getByRole('textbox', { name: 'মন্তব্য লিখুন' }).click();
  await page.getByRole('button', { name: 'সেভ করুন' }).click();
  await page.getByRole('button', { name: 'সেভ করুন' }).click();
});
