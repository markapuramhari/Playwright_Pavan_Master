// @ts-check
import { defineConfig, devices } from '@playwright/test';
//const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  globalSetup: require.resolve('./Hooks/GlobalHooksBefore.js'),
  globalTeardown: require.resolve('./Hooks/GlobalHooksAfter.js'),
  testDir: './tests',
  /* Run tests in files in parallel */
  //fullyParallel: false,
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  //reporter: 'list',
  //reporter:[['json',{outputFile:'results.json'}]],
  //reporter:[['junit',{outputFile:'results.xml'}]],
  //reporter: [['allure-playwright',{outputFolder: 'allure-results'}]],

  reporter: [['html'],
  ['list'],
  ['json', { outputFile: 'results.json' }],
  ['junit', { outputFile: 'results.xml' }],
  ['allure-playwright', { outputFolder: 'allure-results' }]], //mutiple reports

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: false,   //--headed
    headless: true,
  },
  timeout: 40000, //Default to 30000ms
  expect: { timeout: 10000 }, //Defaults to 5000ms.

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',           //--project='chromium'
      use: { ...devices['Desktop Chrome'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Edge',   //--project='Edge'
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Chrome',    //--project='Chrome'
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },


  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

