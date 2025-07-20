import { expect, Locator, Page} from '@playwright/test';

export class LoginPage {

    //locators
    public readonly usernameInput : Locator;
    public readonly passwordInput : Locator;
    public readonly loginButton : Locator;
    public readonly swaglabsHeader : Locator;
    public readonly errorMessage : Locator;

    constructor(public readonly page: Page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.swaglabsHeader = page.getByText('Swag Labs');
        this.errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
    }

    // // Navigates to the login page
    // async navigateTo(: Promise<void>) {


    //     await this.page.goto('https://www.saucedemo.com/');
    //     await this.page.waitForLoadState('networkidle');
    // }



}