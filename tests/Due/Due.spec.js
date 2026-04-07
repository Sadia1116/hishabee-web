import { test, expect } from '@playwright/test';

test('Due', async ({ page }) => {
  await test.step('Step 1: Open Login Page', async () => {
    await page.goto('https://dokan-testing.netlify.app/auth');
    await expect(page, 'Expected: User should land on login page').toHaveURL(
      /auth/,
    );
  });

  await test.step('Step 2: Enter Phone Number', async () => {
    const phone = page.getByPlaceholder('XXXXXXXXXX');
    await phone.fill('01966866176');

    await expect(
      phone,
      'Expected: Phone number should be entered correctly',
    ).toHaveValue('01966866176');
  });

  await test.step('Step 3: Click Continue', async () => {
    await page.getByRole('button', { name: 'এগিয়ে যান' }).click();

    const pinField = page.locator('#current_password');
    await expect(pinField, 'Expected: PIN field should appear').toBeVisible();
  });

  await test.step('Step 4: Enter PIN', async () => {
    const pin = page.locator('#current_password');
    await pin.fill('12345');

    await expect(pin, 'Expected: PIN should be entered').toHaveValue('12345');
  });

  await test.step('Step 5: Login', async () => {
    await page.getByRole('button', { name: 'লগইন করুন' }).click();

    const shopBtn = page.getByRole('button', { name: 'সিলেক্ট করুন' }).first();
    await expect(
      shopBtn,
      'Expected: Shop select button should be visible',
    ).toBeVisible();
  });

  await test.step('Step 6: Select Shop', async () => {
    await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();

    await expect(
      page,
      'Expected: User should navigate to dashboard',
    ).not.toHaveURL(/auth/);
  });

  await test.step('Step 7: Go to Sell Page', async () => {
    await page.getByRole('link', { name: 'বেচা', exact: true }).click();

    await expect(page, 'Expected: Sell page should open').toHaveURL(/sell/);
  });

  await test.step('Step 8: Add Products', async () => {
    await page.getByRole('button', { name: 'Add' }).first().click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();

    await expect(
      page.locator('.text-sm.w-14'),
      'Expected: Product quantity/price section should be visible',
    ).toBeVisible();
  });

  await test.step('Step 9: Apply Discount', async () => {
    await page.locator('.text-sm.w-14').click();
    await page.locator('input').fill('30');

    await expect(
      page.locator('input'),
      'Expected: Discount value should be applied',
    ).toHaveValue('30');
  });

  await test.step('Step 10: Add Delivery Charge', async () => {
    await page.getByText('ডেলিভারী চার্জ').click();
    await page.locator('input').nth(1).fill('20');

    await expect(
      page.locator('input').nth(1),
      'Expected: Delivery charge should be added',
    ).toHaveValue('20');
  });

  await test.step('Step 11: Select Payment', async () => {
    await page.getByRole('button', { name: 'বাকি' }).click();

    const cash = page.getByRole('spinbutton', { name: 'ক্যাশ পেয়েছি *' });
    await cash.fill('20');

    await expect(cash, 'Expected: Cash amount should be entered').toHaveValue(
      '20',
    );
  });

  await test.step('Step 12: Add Customer Info', async () => {
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'ggg' }).click();

    await expect(
      page.getByRole('combobox').first(),
      'Expected: Customer should be selected',
    ).toBeVisible();
  });

  await test.step('Step 13: Final Sale', async () => {
    await page.getByRole('button', { name: 'বিক্রি করুন' }).click();

    await expect(
      page.getByText(/success|successful|complete/i),
      'Expected: Sale should be completed successfully',
    ).toBeVisible();
  });
});
