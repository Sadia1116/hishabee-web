const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  // 🔥 Flaky detect করার জন্য
  retries: 2,

  timeout: 60000,

  reporter: [['list'], ['allure-playwright']],

  use: {
    headless: false, // 👈 headed default (debug friendly)

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // 🔥 সব run এ trace রাখবে (best for debugging)
    trace: 'retain-on-failure',

    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // optional
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
