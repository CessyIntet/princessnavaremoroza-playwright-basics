//Auto-retrying assertions - most commonly used bcoz they handle asynchronous behaviour gracefully
//Non-retrying assertions - useful when we need immediate checks without waiting
//Negating matchers - great for ensuring something is not true.
//Soft assertions - helpful when we want to continue execution even if some assertions fail.
//Custom expect messages improve the readability of test failures.


import { test, expect } from '@playwright/test';

test('Login button should be visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //1. advanced assertion example: Auto-retrying assertion (for us to check if there's a missing element)
  await expect(page.getByRole("button", {name:"Login"})).toBeVisible();

  //2. Non-retrying assertion + negating matchers
  const UsernameField = page.locator('[data-test="username"]');
  expect(UsernameField).not.toBeNull();

});