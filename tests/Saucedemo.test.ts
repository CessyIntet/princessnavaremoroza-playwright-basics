import { test, expect } from '@playwright/test';

//Successful login
test('Should Succesful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();


  
  //Verify URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') 

  //Sauce Demo should be visible
  await page.getByText('Swag Labs').click(); //assert
  
  
  //Await page.screenshot
  await page.screenshot({ path: 'tests/test.Screenshot/successful-login.png', fullPage: true })
});

//Unsuccessful login
test('Invalid log in due to wrong credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('locked');
 
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  //assert-Verify error message
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

  //Await page.screenshot
  await page.screenshot({ path: 'tests/test.Screenshot/unsuccesslful-login.png', fullPage: true })
});