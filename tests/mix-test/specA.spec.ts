import { test } from '@playwright/test';

test.describe.configure ({ mode: 'serial' }); // run tests in serial

test.describe('Spec A File run in serial mode', () => {
    test('Test A1', async ({ page }) => {
    
        // sample here is the user will log in as maker
        console.log('Running Test A1');
    });
    
    test('Test A2', async ({ page }) => {
       
        // sample here is the user will log in as approver
        console.log('Running Test A2');
    });
    });  