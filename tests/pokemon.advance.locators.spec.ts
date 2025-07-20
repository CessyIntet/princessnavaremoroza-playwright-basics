import { test, expect } from '@playwright/test';

//this is error
// test.describe("Pokemon Table Tests", () => {}
//     test.beforeEach(async ({ page }) => {
//   await page.goto('https://labs.testautomationph.com/table');
// });

test('Should show pokemon data in table', async ({ page }) => {
  
  await page.goto("https://labs.testautomationph.com/table");

  const firstRow = page.locator('[data-testid^="pokemon-row-"]').first();  // ^ = starts with
  await firstRow.waitFor({state:'visible'});
  await expect(firstRow).toBeVisible();

  //get the last row
  
  const lastRow = page.locator('[data-testid^="pokemon-row-"]').last();  // ^ = starts with
 
  await firstRow.waitFor({state:'visible'});
  await expect(lastRow).toBeVisible();

});