import { test, expect } from '@playwright/test';

test.describe('Quick Sell Module', () => {
  async function login(page) {
    await page.goto('https://dokan-testing.netlify.app/auth');
    await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
    await page.getByRole('button', { name: 'এগিয়ে যান' }).click();
    await page.locator('#current_password').fill('12345');
    await page.getByRole('button', { name: 'লগইন করুন' }).click();
    await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
  }

  async function openQuickSell(page) {
    await page.getByRole('button', { name: 'দ্রুত বেচা', exact: true }).click();

    await expect(
      page.getByText('টাকার পরিমান *'),
      'Expected: Quick Sell modal should open',
    ).toBeVisible();
  }

  // ✅ TC-01: Default date + cash
  test('TC-01: Default date sell', async ({ page }) => {
    await test.step('Login & Open Quick Sell', async () => {
      await login(page);
      await openQuickSell(page);
    });

    await test.step('Enter Amount & Sell', async () => {
      await page
        .getByRole('spinbutton', { name: 'টাকার পরিমান *' })
        .fill('500');
      await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();

      await expect(
        page.getByText('SuccessFully'),
        'Expected: Sell success message',
      ).toBeVisible();
    });
  });

  // ✅ TC-02: Previous date
  test('TC-02: Change date to previous', async ({ page }) => {
    await login(page);
    await openQuickSell(page);

    await test.step('Change Date', async () => {
      await page.getByRole('button', { name: 'বিক্রির তারিখঃ' }).click();
      await page.getByRole('button', { name: /March/ }).first().click();
    });

    await test.step('Sell', async () => {
      await page
        .getByRole('spinbutton', { name: 'টাকার পরিমান *' })
        .fill('300');
      await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();
    });
  });

  // ✅ TC-03: Empty amount
  test('TC-03: Sell without amount', async ({ page }) => {
    await login(page);
    await openQuickSell(page);

    await test.step('Click Sell without amount', async () => {
      await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();

      await expect(
        page.getByText(/টাকার পরিমান/),
        'Expected: Validation should appear',
      ).toBeVisible();
    });
  });

  // ✅ TC-04: Only Amount
  test('TC-04: Only amount, rest empty', async ({ page }) => {
    await login(page);
    await openQuickSell(page);

    await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).fill('200');

    await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();

    await expect(
      page.getByText('SuccessFully'),
      'Expected: Sell should complete',
    ).toBeVisible();
  });

  // ✅ TC-05: Amount + Profit
  test('TC-05: Amount and Profit', async ({ page }) => {
    await login(page);
    await openQuickSell(page);

    await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).fill('400');
    await page.getByRole('spinbutton', { name: 'লাভ' }).fill('50');

    await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();

    await expect(
      page.getByText('SuccessFully'),
      'Expected: Sell should complete',
    ).toBeVisible();
  });

  // ✅ TC-06: Amount + Customer info
  test('TC-06: Amount with customer info', async ({ page }) => {
    await login(page);
    await openQuickSell(page);

    await page.getByRole('spinbutton', { name: 'টাকার পরিমান *' }).fill('600');
    await page.getByRole('textbox', { name: 'কাস্টমার নাম' }).fill('Test User');
    await page.getByPlaceholder('XXXXXXXXXX').fill('01700000000');

    await page.getByRole('button', { name: 'টাকার মূল্য পেয়েছেন' }).click();

    await expect(
      page.getByText('SuccessFully'),
      'Expected: Sell should complete',
    ).toBeVisible();
  });

  // ✅ TC-07: Open Quick Sell only
  test('TC-07: Open Quick Sell', async ({ page }) => {
    await login(page);

    await page.getByRole('button', { name: 'দ্রুত বেচা', exact: true }).click();

    await expect(
      page.getByText('টাকার পরিমান *'),
      'Expected: Quick Sell modal visible',
    ).toBeVisible();
  });
});
