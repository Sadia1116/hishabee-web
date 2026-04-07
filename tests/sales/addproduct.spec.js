import { test, expect } from '@playwright/test';

test('Sale> add product', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.locator('#current_password').click();
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বেচা', exact: true }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('paragraph').filter({ hasText: 'Add Product' }).click();
  await page.getByRole('textbox', { name: 'পণ্যের নাম *' }).click();
  await page.getByRole('textbox', { name: 'পণ্যের নাম *' }).fill('pen');
  await page.getByRole('spinbutton', { name: 'বর্তমান মজুদ' }).click();
  await page.getByRole('spinbutton', { name: 'বর্তমান মজুদ' }).fill('100');
  await page
    .getByRole('spinbutton', { name: 'ক্রয় মূল্য', exact: true })
    .click();
  await page
    .getByRole('spinbutton', { name: 'ক্রয় মূল্য', exact: true })
    .click();
  await page
    .getByRole('spinbutton', { name: 'ক্রয় মূল্য', exact: true })
    .fill('20');
  await page
    .getByRole('spinbutton', {
      name: 'বিক্রয় মূল্য (ডিসকাউন্ট ও ভ্যাট প্রযোজ্য) *',
    })
    .click();
  await page
    .getByRole('spinbutton', {
      name: 'বিক্রয় মূল্য (ডিসকাউন্ট ও ভ্যাট প্রযোজ্য) *',
    })
    .click();
  await page
    .getByRole('spinbutton', {
      name: 'বিক্রয় মূল্য (ডিসকাউন্ট ও ভ্যাট প্রযোজ্য) *',
    })
    .fill('50');
  await page.getByRole('switch', { name: 'অনলাইনে বিক্রি করতে চান?' }).click();
  await page.getByRole('combobox', { name: 'ইউনিট' }).click();
  await page.getByRole('option', { name: 'পিস' }).first().click();
  await page.getByRole('combobox', { name: 'ক্যাটাগরি', exact: true }).click();
  await page
    .getByLabel('স্টেশনারি এবং অফিস-সরঞ্জাম')
    .getByText('স্টেশনারি এবং অফিস-সরঞ্জাম')
    .click();
  await page.getByRole('combobox', { name: 'সাব ক্যাটাগরি' }).click();
  await page.getByLabel('কলম').getByText('কলম').click();
  await page.getByRole('switch', { name: 'পাইকারি বিক্রি করতে চান?' }).click();
  await page.getByRole('spinbutton', { name: 'পাইকারি মূল্য' }).click();
  await page.getByRole('spinbutton', { name: 'পাইকারি মূল্য' }).fill('5');
  await page.getByRole('spinbutton', { name: 'নুন্যতম পরিমাণ' }).click();
  await page.getByRole('dialog', { name: 'Title' }).click();
  await page.getByRole('spinbutton', { name: 'নুন্যতম পরিমাণ' }).fill('30');
  await page.getByRole('button', { name: 'প্রোডাক্ট যুক্ত করুন' }).click();
  await page
    .getByText('পণ্য সফলভাবে যুক্ত হয়েছে!আরো যুক্ত করুনস্টক যুক্ত করুন')
    .click();
  await page.getByRole('button', { name: 'Close' }).click();
});
