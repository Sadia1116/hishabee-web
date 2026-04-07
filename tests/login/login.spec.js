const { test, expect } = require('@playwright/test');

test('Login with valid phone and pin', async ({ page }) => {
  await test.step('Step 1: Open Login Page', async () => {
    await page.goto('https://dokan-testing.netlify.app/auth');
    await expect(page, 'Expected: User should land on auth page').toHaveURL(
      /auth/,
    );
  });

  await test.step('Step 2: Enter Phone Number', async () => {
    const phoneInput = page.getByPlaceholder('XXXXXXXXXX');
    await phoneInput.fill('01966866176');

    // Expected message add
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

    // Expected message add
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
  });
});
