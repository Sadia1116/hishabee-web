import { test, expect } from '@playwright/test';

test('Quick sell', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('button', { name: 'দ্রুত বেচা', exact: true }).click();
  await page.getByRole('button', { name: 'বিক্রির তারিখঃ' }).click();
  await page
    .getByRole('button', { name: 'Today, Tuesday, March 3rd,' })
    .click();
  await page.getByText('টাকার পরিমান *').click();
  await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).click();
  await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).fill('500');
  await page.getByRole('spinbutton', { name: 'লাভ' }).click();
  await page.getByRole('spinbutton', { name: 'লাভ' }).click();
  await page.getByRole('spinbutton', { name: 'লাভ' }).fill('30');
  await page.getByRole('textbox', { name: 'কাস্টমার নাম' }).click();
  await page.getByRole('combobox').click();
  await page.getByText('01966866176').click();
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByRole('textbox', { name: 'মন্তব্য লিখুন' }).click();
  await page.getByRole('textbox', { name: 'মন্তব্য লিখুন' }).fill('oil');
  await page.locator('#airplane-mode').click();
  await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();
  await page.getByText('Quick Sell Added SuccessFully').click();
});
