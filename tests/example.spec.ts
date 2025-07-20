// This is an example of Playwright test
// You can run this file using the command: npx playwright test test/example.spec.js
//SPEC FILE = TEST FILE
// Test = test case/Test idea
// @ts-check
import { test, expect } from '@playwright/test';
// ARANGE --> ACT --> ASSERT
// This is a test that logs into the Sauce Demo website and checks if the 
// login was successful by verifying the presence of the "Swag Labs" text.

test('should successfuly login and verify swag labs logo is visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
 
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  //ASSERT
  await expect(page.getByText('Swag Labs')).toBeVisible();
});

test('Verify user is unable to login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret');

  await page.locator('[data-test="login-button"]').click(); 
  //ASSERT
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});


// You can run this test via Headed or Headless mode
// Headed mode: npx playwright test test/example.spec.js --headed
// Headless mode: npx playwright test tests/example.spec.js --headed=false
// run via --ui flag: npx playwright test tests/example.spec.js --ui
// Run in chrome: npx playwright test tests/example.spec.js --project chromium