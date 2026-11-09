import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo - Logout Tests', () => {

    test('should logout successfully and redirect to login page', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Step 1: Login
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/.*inventory.*/);

        // Step 2: Logout
        await loginPage.logout();

        // Step 3: Validate redirect and that login button is visible again
        await expect(page).not.toHaveURL(/.*inventory.*/);
        await expect(loginPage.loginButton).toBeVisible();
    });
});
