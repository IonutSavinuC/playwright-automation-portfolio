import { Locator, Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly backpackAddToCartButton: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;
    readonly checkoutButton: Locator;
    // New elements for sorting functionality
    readonly sortDropdown: Locator;
    readonly productPrices: Locator;
    // New element for removing product from cart
    readonly backpackRemoveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        
        // Native product sort dropdown container
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        // All product price elements displayed on the page
        this.productPrices = page.locator('.inventory_item_price');
        
        // Specific selector for removing the Sauce Labs Backpack
        this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async removeBackpackFromCart() {
        await this.backpackRemoveButton.click();
    }

    async goToCartAndCheckout() {
        await this.shoppingCartLink.click();
        await this.checkoutButton.click();
    }

    // Method to change the sorting option
    async sortProductsBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
        // 'lohi' stands for Price (low to high)
        await this.sortDropdown.selectOption(value);
    }
}
