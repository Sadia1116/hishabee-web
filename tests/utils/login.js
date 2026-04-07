export async function login(page) {
  await page.goto('https://dokan-testing.netlify.app/auth');

  await page.getByPlaceholder('XXXXXXXXXX').fill('01966866176');
  await page.getByRole('button', { name: 'এগিয়ে যান' }).click();

  await page.locator('#current_password').fill('12345');
  await page.getByRole('button', { name: 'লগইন করুন' }).click();

  await page.getByRole('button', { name: 'সিলেক্ট করুন' }).first().click();
}
