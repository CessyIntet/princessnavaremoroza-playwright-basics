//SESSION 14 updates

import { test } from '../shared/base';
import { attachScreenshot } from '../shared/helpers.ts';

const LOGIN_SUCCESS_SCREENSHOT = 'login-success-screenshot.png';
const LOGIN_FAILURE_SCREENSHOT = 'login-failure-screenshot.png';
const LOGIN_ERROR_MESSAGE = 
  'Epic sadface: Username and password do not match any user in this service';

 test.describe('Login Test Suite', { tag: [ '@Regression-Testing', '@Smokte-Testing', "@Sprint-1"] }, () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
    });
  


    test('Should Successfully login - POM Modular', async ({ loginPage }, testInfo) => {
      await test.step('Input Username', async () => {
        await loginPage.InputUsername(process.env.SAUCEDEMO_USERNAME!);
      });
      await test.step('Input Password', async () => {
        await loginPage.InputPassword(process.env.SAUCEDEMO_PASSWORD!);
      });
      await test.step('Click Login Button', async () => {
        await loginPage.ClickLoginButton();
      });
      await test.step('Verify visibility & text Swag Labs', async () => {
        await loginPage.verifyLoginSuccess();
      });
      await test.step('Attach screenshot of successful login', async () => {
        await attachScreenshot(
          loginPage.page,
          testInfo,
          LOGIN_SUCCESS_SCREENSHOT,
        );    
      });
    });

    
    test("Should successfully login", {tag: "@HappyPath"}, async ({ page, loginPage }, testInfo) => {
      await test.step("Login with valid credentials", async () => {
        await loginPage.login(
          process.env.SAUCEDEMO_USERNAME!, 
          process.env.SAUCEDEMO_PASSWORD!
        );
      });
      await test.step("Verify login success", async () => {
        await loginPage.verifyLoginSuccess();
      });
      await test.step("Take and attach screenshot", async () => {
        await attachScreenshot(
          page,
          testInfo,
          LOGIN_SUCCESS_SCREENSHOT
        );
      });
    });

    test("should unsuccessfully login with invalid credentials", {tag: "@Negative-Testing"}, async ({ page, loginPage }, testInfo) => {
      await test.step("Login with invalid credentials", async () => {
        await loginPage.login('invalid_user', 'invalid_password');
      });
      await test.step("Verify login error message", async () => {
        await loginPage.verifyLoginError(LOGIN_ERROR_MESSAGE);
      });
      await test.step("Take and attach screenshot of error", async () => {
        await attachScreenshot(
          page,
          testInfo,
          LOGIN_FAILURE_SCREENSHOT
          );
      });
  });
});




// PART OF PREVIOUS SESSION ACTIVITIES
// import { test, expect } from '@playwright/test';

// test('should successfuly login and verify swag labs logo is visible', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.locator('[data-test="username"]').fill('standard_user');
 
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   //ASSERT
//   await expect(page.getByText('Swag Labs')).toBeVisible();
// });

// test('Verify user is unable to login with invalid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.locator('[data-test="username"]').fill('standard_user');

//   await page.locator('[data-test="password"]').fill('secret');

//   await page.locator('[data-test="login-button"]').click(); 
//   //ASSERT
//   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
// });