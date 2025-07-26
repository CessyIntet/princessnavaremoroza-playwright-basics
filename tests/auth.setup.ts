import { test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
import { LoginPage } from '../pages/LoginPage';


setup('Do Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login(process.env.SAUCEDEMO_USERNAME!, process.env.SAUCEDEMO_PASSWORD!)
        await loginPage.verifyLoginSuccess();   
        await page.context().storageState({ path: STORAGE_STATE });
    
    
    /**FOR SESSION 13 | commented for session 14

        /** await page.goto('https://www.saucedemo.com/');
        *   await page.locator('[data-test="username"]').fill(process.env.SAUCEDEMO_USERNAME!);
        *   await page.locator('[data-test="password"]').fill(process.env.SAUCEDEMO_PASSWORD!);
        *   await page.locator('[data-test="login-button"]').click();
        *   await expect(page.getByText('Swag Labs')).toBeVisible()
        *    await expect(loginPage.swaglabsHeader).toBeVisible() - another way to verify
        */ 
    
      
});