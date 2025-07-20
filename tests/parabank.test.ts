import { test, expect } from '@playwright/test';

test('Verify the following error message when clicking Register button with empty fields', async ({ page }) => {
  //first strategy is the locator

    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  
    await page.getByRole('button', { name: 'Register' }).click();
//instead of using this
    // await expect(page.getByText('First name is required.')).toBeVisible();
// we will use locator id and .ToBeVisible so that the test will not be flaky

    await expect(page.locator('[id="customer.firstName.errors"]')).toBeVisible();
    await page.locator('[id="customer.firstName"]').fill('Test1')

});

test('Verify that user is able to register with valid data', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    //we will use locator with unique ID from DevTools

    await page.locator('[id="customer.firstName"]').fill('Testa')
    await page.locator('[id="customer.lastName"]').fill('surname')
    await page.locator('[id="customer.address.street"]').fill('123 soledad')
    await page.locator('[id="customer.address.city"]').fill('lucena')
    await page.locator('[id="customer.address.state"]').fill('sample')
    await page.locator('[id="customer.address.zipCode"]').fill('4330')
    await page.locator('[id="customer.phoneNumber"]').fill('1234567890')
    await page.locator('[id="customer.ssn"]').fill('12345678')
    await page.locator('[id="customer.username"]').fill('test.surna')
    await page.locator('[id="customer.password"]').fill('pass123456')
    await page.locator('[id="repeatedPassword"]').fill('pass123456')

    
    // await page.getByRole('button', { name: 'Register' }).click();

    //not recommended to automate the registration page
    // await expect(page.getByRole('heading', { name: 'Welcome Testa' })).toBeVisible();
  
    // await page.getByText('Your account was created').click();
    
});