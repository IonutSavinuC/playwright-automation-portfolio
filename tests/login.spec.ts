import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo - Login Tests', () => {
    
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        
        // Validate that the user was redirected to the inventory page
        await expect(page).toHaveURL(/.*inventory.*/);
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('wrong_user', 'wrong_password');
        
        // Validate that the native error message is visible and contains correct text
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });
});
