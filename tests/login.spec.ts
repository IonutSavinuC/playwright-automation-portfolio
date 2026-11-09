import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo - Login Tests', () => {
    
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        
        // Validăm că am ajuns pe pagina de inventar (magazinul propriu-zis)
       await expect(page).toHaveURL(/.*inventory.*/);
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('wrong_user', 'wrong_password');
        
        // Validăm apariția mesajului de eroare nativ al site-ului
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });
});
