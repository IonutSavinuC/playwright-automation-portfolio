import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('SauceDemo - Checkout Tests', () => {

    test('should complete the checkout process successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Step 1: Login
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // Step 2: Add product and navigate to checkout
        await productsPage.addBackpackToCart();
        await productsPage.goToCartAndCheckout();

        // Step 3: Fill delivery information and continue
        await checkoutPage.fillCheckoutInformation('John', 'Doe', '700000');

        // Step 4: Finish the order and validate success message
        await checkoutPage.finishCheckout();
        await expect(checkoutPage.successHeader).toBeVisible();
        await expect(checkoutPage.successHeader).toHaveText('Thank you for your order!');
    });

    // NEW TEST: Negative scenario for missing checkout information
    test('should show error message when checkout fields are empty', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await productsPage.addBackpackToCart();
        await productsPage.goToCartAndCheckout();

        // Click continue without filling any data
        await checkoutPage.clickContinue();

        // Validate error message visibility and text
        await expect(checkoutPage.errorMessage).toBeVisible();
        await expect(checkoutPage.errorMessage).toContainText('Error: First Name is required');
    });
});
