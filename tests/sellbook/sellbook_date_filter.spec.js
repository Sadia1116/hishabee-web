import { test, expect } from '@playwright/test';

test('Sell Book Date Filter', async ({ page }) => {
  await page.goto('https://dokan-testing.netlify.app/auth');
  await page.getByPlaceholder('XXXXXXXXXX').click();
  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
  await page.locator('#current_password').click();
  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();
  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  await page.getByRole('link', { name: 'বেচার খাতা' }).click();
  await page.getByRole('button', { name: 'Mar 01, 2026 - Mar 31,' }).click();
  await page.getByRole('button', { name: 'আজ' }).click();
  await page.getByRole('button', { name: 'গত ৩০ দিন' }).click();
  await page.getByRole('button', { name: 'শুরুর তারিখ শেষের তারিখ' }).click();
  await page.getByRole('button', { name: 'Monday, March 2nd, 2026,' }).click();
  await page.getByRole('button', { name: 'Mar 31,' }).click();
  await page.getByRole('button', { name: 'Go to the Next Month' }).click();
  await page.getByRole('button', { name: 'Tuesday, April 28th,' }).click();
  await page.getByRole('button', { name: 'প্রয়োগ' }).click();
  await page.getByRole('heading', { name: 'কোন ডেটা নেই' }).click();
  await page
    .getByText(
      'নির্বাচিত তারিখের জন্য কোন ডেটা দেখানো যাচ্ছে না। আপনি আরও ডেটা দেখতে তারিখ পরিব',
    )
    .click();
  await page.getByText('Apr 28, 2026 থেকে Apr 28,').click();
  await page.getByRole('button', { name: 'Apr 28, 2026 - Apr 28,' }).click();
  await page.getByRole('button', { name: 'এই বছর' }).click();
  await page.getByRole('button', { name: 'প্রয়োগ' }).click();
  await page.getByRole('cell', { name: 'R9S68MS' }).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.locator('.fixed.inset-0').click();
  await page.getByRole('button', { name: '21' }).click();
  await page.getByRole('cell', { name: '০১ জানু ২০২৬, ০১:৫৪ PM' }).click();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Transaction Details' })
    .click();
  await page.locator('.fixed.inset-0').click();
});
