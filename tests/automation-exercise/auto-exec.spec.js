import { test, expect } from '@playwright/test';

test.describe('Automation Exercise-Navigation', () => {
    //Tests should run in isolation (don't depend on each other)

    // test.beforeAll(async () => {
    //     test.setTimeout(60000); // Set a timeout of 60 seconds for each test
        
    // });

    // test.beforeAll(async () => {
    //     console.info('Starting Automation Exercise Tests');

    // });
    // test.afterAll(async () => {
    //     console.info('Completed Automation Exercise Tests');

    // });

    test.beforeEach(async ({ page }) => {
            await page.goto('https://www.automationexercise.com/');
    });

    // test.afterEach(async ({ page }) => {
    //     await page.close(); 

    // });

    test('Should successfully visit the product page', async ({ page }) => {
        // Step 1
        await test.step('Navigate to the Product Page', async () => {
        await page.locator('a[href="/products"]').click();
        });
        // Step 2
        await test.step('Verify URL and the Product Page label', async () => {
            await expect(page).toHaveURL('https://www.automationexercise.com/products');
            await expect(page.locator('h2.title.text-center')).toContainText('All Products');
        });

    });

    test('Header should contain the following menu', async ({ page }) => {
        
        await expect(page.locator('#header')).toMatchAriaSnapshot(`
    - link "Website for automation practice":
      - /url: /
      - img "Website for automation practice"
    - list:
      - listitem:
        - link " Home":
          - /url: /
      - listitem:
        - link " Products":
          - /url: /products
      - listitem:
        - link " Cart":
          - /url: /view_cart
      - listitem:
        - link " Signup / Login":
          - /url: /login
      - listitem:
        - link " Test Cases":
          - /url: /test_cases
      - listitem:
        - link " API Testing":
          - /url: /api_list
      - listitem:
        - link " Video Tutorials":
          - /url: https://www.youtube.com/c/AutomationExercise
      - listitem:
        - link " Contact us":
          - /url: /contact_us
        `);
    });

    test('test3', async ({ page }) => {
        console.log('This is test 3');
    });
});

test.describe('Test Group 2', () => {


     test('test4', async ({ page }) => {
        console.log('This is test 3');
    });
 
    test('test5', async ({ page }) => {
        console.log('This is test 3');
    });
});