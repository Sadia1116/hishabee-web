import { test, expect } from '@playwright/test';

test('Transection Delete', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বেচার খাতা' }).click();
  await page.getByRole('cell', { name: 'after fix +88' }).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.getByText('কাস্টমার নামAF after fix').click();
  await page.getByText('মোট আইটেম: 5কাস্টমার নামAF').click();
  await page.getByText('পেমেন্ট : ৳ ৮৭২.৫').click();
  await page
    .getByText(
      'পেমেন্ট : ৳ ৮৭২.৫বাকিমোট৳ ৮৭২.৫ডেলিভারী চার্জ৳ ০ডিস্কাউন্ট৳ ০সর্বমোট৳ ৮৭২.৫',
    )
    .click();
  await page.getByText('পণ্য বিক্রি12').click();
  await page.getByText('Notes12, 12, aaa7').click();
  await page.getByRole('button', { name: 'মুছে ফেলুন' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page
    .getByRole('region', { name: 'Notifications alt+T' })
    .getByRole('listitem')
    .click();
});
