import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').fill('12345');
  await page.locator('#current_password').click();
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'অনলাইন শপ' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^অ্যাকটিভ অর্ডার০$/ })
    .nth(1)
    .click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByText('অনলাইন প্রোডাক্ট').first().click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByText('৳ ০').click();
  await page.getByText('ওয়েবসাইট ভিজিট').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'ওয়েবসাইট' }).click();
  const page1 = await page1Promise;
  await page1
    .getByRole('link', { name: "logo Sadia's kitchen (qa test shop) cvg" })
    .click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('button', { name: 'লিংক কপি' }).click();
  await page.getByText('শপ লিঙ্ক ক্লিপবোর্ডে কপি করা হয়েছে').click();
  await page.getByRole('button', { name: 'QR কোড' }).click();
  await page.locator('canvas').click({
    position: {
      x: 156,
      y: 145,
    },
  });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'মেসেজ' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'স্টোর সেটিংস' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'অনলাইন প্রোডাক্ট' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'অর্ডার লিস্ট' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'থিমস' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'নিজস্ব ডোমেইন' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Online-shopown domain$/ })
    .click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'ডেলিভারি মাধ্যম' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'অ্যাপ বিল্ড করুন' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'ফিচারড পণ্য' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'ফিচারড পণ্য' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'মার্কেটিং & SEO' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'শপ পলিসি' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'ফ্রড চেক' }).click();
  await page.locator('div').filter({ hasText: 'Online-shop' }).nth(1).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
  await page.getByRole('link', { name: 'প্রোমো কোড' }).click();
  await page.getByRole('link', { name: 'Online-shop' }).click();
});
