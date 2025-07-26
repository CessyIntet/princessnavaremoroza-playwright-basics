import { expect, Locator, Page } from '@playwright/test';
import { before } from 'node:test';

export class LoginPage {

    //locators 
    //we're saying that these are locators that we will use in the tests 
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly swaglabsHeader: Locator;
    public readonly errorMessage: Locator;

    constructor(public readonly page: Page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.swaglabsHeader = page.getByText('Swag Labs');
        this.errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
    }
    //Method 1

    // Navigates to the login page
    async navigateTo(): Promise<void> {


        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState('networkidle');
    }

    //Method 2
    /**
    * Performs login with given username and password
    * 
    * @param username - The username to log in with
    * @param password - The password to log in with
    */

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    /**
     * Verifies that the login was successful by checking the visibility of the Swag Labs header.
     */

    async verifyLoginSuccess(): Promise<void> {
        await this.page.addStyleTag({
            content: `
            *, *::before, *::after {
                transition: none !important;
                animation: none !important;
            }
        `
        });

        await expect(this.swaglabsHeader).toBeVisible();
        await expect(this.swaglabsHeader).toHaveText('Swag Labs');
    }
    
    /**
     * Verifies that the login error message is displayed and matches the expected text.
     * @param expectedErrorMessage - The expected error message text.
     */

    async verifyLoginError(expectedErrorMessage: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }

    /* Modular Package Object Model */
    async InputUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }
    async InputPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
    async ClickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}