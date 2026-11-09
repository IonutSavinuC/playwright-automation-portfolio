import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('SauceDemo - Products & Cart Tests', () => {

    test('should add a product to the cart successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        // Step 1: User Authentication
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/.*inventory.*/);

        // Step 2: Add product to cart
        await productsPage.addBackpackToCart();

        // Step 3: Validate that the badge shows '1' item
        await expect(productsPage.shoppingCartBadge).toBeVisible();
        await expect(productsPage.shoppingCartBadge).toHaveText('1');
    });

    // NEW TEST: Remove product from cart functionality
    test('should remove a product from the cart successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // Add to cart first
        await productsPage.addBackpackToCart();
        await expect(productsPage.shoppingCartBadge).toHaveText('1');

        // Remove from cart
        await productsPage.removeBackpackFromCart();

        // Validate that the shopping cart badge is no longer visible (meaning it's empty)
        await expect(productsPage.shoppingCartBadge).not.toBeVisible();
    });

    // Verify price sorting functionality (Low to High)
    test('should sort products by price from low to high', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // Select the sorting option 'lohi' (Low to High)
        await productsPage.sortProductsBy('lohi');

        // Extract all price texts displayed on the page
        const priceTexts = await productsPage.productPrices.allInnerTexts();
        
        // Convert text array (e.g., "$7.99") to a number array (e.g., 7.99)
        const prices = priceTexts.map(text => parseFloat(text.replace('$', '')));

        // Validate that prices are sorted in ascending order
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
    });
});
