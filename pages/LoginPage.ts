import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    // New elements for logout functionality
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
        
        // Selector for the side menu button (three lines icon)
        this.menuButton = page.locator('#react-burger-menu-btn');
        // Selector for the logout link inside the menu
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    }

    async goto() {
        await this.page.goto('https://saucedemo.com');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}
