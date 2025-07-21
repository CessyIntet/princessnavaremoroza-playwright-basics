import { test } from '@playwright/test';

test.describe('Spec B should run in parallel', () => { // run tests in parallel
    // sample here is our previous test cases
    test('Test B1', async ({ page }) => {
    
        console.log('Running Test B1');
    });
    
    test('Test B2', async ({ page }) => {
       
        
        console.log('Running Test B2');
    });
});