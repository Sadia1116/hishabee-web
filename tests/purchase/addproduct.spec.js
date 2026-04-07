import { test, expect } from '@playwright/test';

test('Purchase Add Product Test', async ({ page }) => {
  await test.step('Step 1: Open Login Page', async () => {
    await page.goto('https://dokan-testing.netlify.app/auth');
    await expect(page, 'Expected: User should land on auth page').toHaveURL(
      /auth/,
    );
  });

  await test.step('Step 2: Enter Phone Number', async () => {
    const phoneInput = page.getByPlaceholder('XXXXXXXXXX');
    await phoneInput.fill('01966866176');
    await expect(
      phoneInput,
      'Expected: Phone input should contain 01966866176',
    ).toHaveValue('01966866176');
  });

  await test.step('Step 3: Click Continue', async () => {
    await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
    const pinField = page.locator('#current_password');
    await expect(
      pinField,
      'Expected: PIN input field should appear',
    ).toBeVisible();
  });

  await test.step('Step 4: Enter PIN', async () => {
    const pinField = page.locator('#current_password');
    await pinField.fill('12345');
    await expect(
      pinField,
      'Expected: PIN field should contain 12345',
    ).toHaveValue('12345');
  });

  await test.step('Step 5: Click Login', async () => {
    await page.getByRole('button', { name: 'লগইন করুন' }).click();
    const shopButton = page
      .getByRole('button', { name: 'সিলেক্ট করুন' })
      .first();
    await expect(
      shopButton,
      'Expected: Shop select button should appear',
    ).toBeVisible();
    await shopButton.click();
  });

  await test.step('Step 6: Navigate to Purchase Section', async () => {
    await page.getByRole('link', { name: 'কেনা', exact: true }).click();
    await expect(page, 'Expected: Purchase page should appear').toHaveURL(
      /sell/,
    );
  });

  await test.step('Step 7: Click Add Product Button', async () => {
    const addButton = page.getByRole('button').nth(4);
    await addButton.click();
    await expect(
      page.locator('text=পণ্যের নাম *'),
      'Expected: Add Product form should appear',
    ).toBeVisible();
  });

  await test.step('Step 8: Fill Product Details', async () => {
    await page.getByRole('textbox', { name: 'পণ্যের নাম *' }).fill('oil');
    await page.getByRole('spinbutton', { name: 'বর্তমান মজুদ' }).fill('10');
    await page
      .getByRole('spinbutton', { name: 'ক্রয় মূল্য', exact: true })
      .fill('120');
    await page
      .getByRole('spinbutton', {
        name: 'বিক্রয় মূল্য (ডিসকাউন্ট ও ভ্যাট প্রযোজ্য) *',
      })
      .fill('150');
    await page
      .getByRole('switch', { name: 'অনলাইনে বিক্রি করতে চান?' })
      .click();
  });

  await test.step('Step 9: Select Unit, Category and Subcategory', async () => {
    await page.getByRole('combobox', { name: 'ইউনিট' }).click();
    await page.getByRole('option', { name: 'লিটার', exact: true }).click();
    await page
      .getByRole('combobox', { name: 'ক্যাটাগরি', exact: true })
      .click();
    await page.getByLabel('মুদিখানা, ফলমূল ও বেকারি').click();
    await page.getByRole('combobox', { name: 'সাব ক্যাটাগরি' }).click();
    await page.getByLabel('রান্নার তেল').click();
  });

  await test.step('Step 10: Fill Description and Wholesale Details', async () => {
    await page.locator('.ql-editor').fill('tir cooking oil');
    await page
      .getByRole('switch', { name: 'পাইকারি বিক্রি করতে চান?' })
      .click();
    await page.getByRole('spinbutton', { name: 'পাইকারি মূল্য' }).fill('100');
    await page.getByRole('spinbutton', { name: 'নুন্যতম পরিমাণ' }).fill('10');
    await page.getByRole('switch', { name: 'স্টক কমের এলার্ট?' }).click();
    await page
      .getByRole('spinbutton', {
        name: 'স্টক পরিমাণ আপনি সতর্কতা সেট করতে চান',
      })
      .fill('5');
  });

  await test.step('Step 11: Click Add Product', async () => {
    await page.getByRole('button', { name: 'প্রোডাক্ট যুক্ত করুন' }).click();
    await expect(
      page.locator('text=oil'),
      'Expected: Product should appear in product list',
    ).toBeVisible();
  });
});
