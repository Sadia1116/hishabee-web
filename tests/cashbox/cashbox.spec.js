const { test, expect } = require('@playwright/test');

test('Cashbox Flow (Cash In & Cash Out)', async ({ page }) => {
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

  await test.step('Step 6: Verify Dashboard Loaded', async () => {
    const balanceMenu = page.getByText('ব্যালেন্স').first();

    await expect(
      balanceMenu,
      'Expected: Dashboard should load with Balance option',
    ).toBeVisible();
  });

  await test.step('Step 7: Open Cashbox (Balance)', async () => {
    const balanceMenu = page.getByText('ব্যালেন্স').first();
    await balanceMenu.click();

    const cashInBtn = page.getByRole('button', { name: 'ক্যাশ ইন' });

    await expect(
      cashInBtn,
      'Expected: Cash In button should be visible',
    ).toBeVisible();
  });

  await test.step('Step 8: Perform Cash In', async () => {
    const cashInBtn = page.getByRole('button', { name: 'ক্যাশ ইন' });
    await cashInBtn.click();

    const amountInput = page.getByRole('spinbutton', { name: 'পরিমান *' });
    await expect(
      amountInput,
      'Expected: Amount input field should be visible',
    ).toBeVisible();

    await amountInput.fill('500');

    await expect(
      amountInput,
      'Expected: Cash In amount should be 500',
    ).toHaveValue('500');

    const noteInput = page.getByRole('textbox', { name: 'নোট' });
    await noteInput.fill('test');

    await page.getByRole('button', { name: 'সংরক্ষণ' }).click();

    await expect(
      page.getByText('ব্যালেন্স'),
      'Expected: Balance page should be visible after Cash In',
    ).toBeVisible();
  });

  await test.step('Step 9: Perform Cash Out', async () => {
    const cashOutBtn = page.getByRole('button', { name: 'ক্যাশ আউট' });

    await expect(
      cashOutBtn,
      'Expected: Cash Out button should be visible',
    ).toBeVisible();

    await cashOutBtn.click();

    const amountInput = page.getByRole('spinbutton', { name: 'পরিমান *' });
    await expect(
      amountInput,
      'Expected: Amount input field should be visible',
    ).toBeVisible();

    await amountInput.fill('500');

    await expect(
      amountInput,
      'Expected: Cash Out amount should be 500',
    ).toHaveValue('500');

    const noteInput = page.getByRole('textbox', { name: 'নোট' });
    await noteInput.fill('test');

    await page.getByRole('button', { name: 'সংরক্ষণ' }).click();

    await expect(
      page.getByText('ব্যালেন্স'),
      'Expected: Balance page should be visible after Cash Out',
    ).toBeVisible();
  });
});
