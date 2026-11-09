# Playwright & TypeScript E2E Automation Framework

![Playwright Tests](https://github.com/IonutSavinuC/playwright-automation-portfolio/actions/workflows/playwright.yml/badge.svg?branch=main)



A production-ready End-to-End (E2E) test automation framework built from scratch using **Playwright** and **TypeScript**. This project demonstrates industry-standard testing practices, robust architecture, and a modern CI/CD pipeline integration.

## 🚀 Key Features

*   **Page Object Model (POM) Architecture:** Clean separation of locators, actions, and test assertions to ensure high maintainability and prevent code duplication.
*   **Cross-Browser Testing:** Scaled to run seamlessly across major commercial rendering engines (**Google Chrome** and **Microsoft Edge** locally).
*   **Robust CI/CD Pipeline:** Fully integrated with **GitHub Actions** to automatically trigger the entire test suite in the cloud on every `git push` or `pull_request` (running across Chromium, Firefox, and WebKit).
*   **Strict Typing & Code Quality:** Configured with modern TypeScript (`tsconfig.json`) to enforce strict type checking and zero compilation warnings.
*   **Comprehensive Test Coverage:** Includes both happy path (E2E flows) and negative test scenarios.

## 🧪 Automated Test Scenarios (SauceDemo)

1.  **Authentication Flow:** Verified successful login with valid credentials and robust error handling for unauthorized attempts.
2.  **Inventory & Sorting:** Automated dynamic product list interaction and verified mathematical price-sorting algorithm consistency (Low to High).
3.  **Cart Management:** Validated active badge counters upon item addition and inverse state consistency when items are removed.
4.  **End-to-End Checkout:** Simulated the complete business funnel from cart navigation, customer metadata form injection, to successful order finalization.
5.  **Session Lifecycle:** Validated core security persistence by executing side-menu user logout and post-session page restrictions.

## 🛠️ Tech Stack

*   **Language:** TypeScript
*   **Test Runner:** Playwright Test
*   **CI/CD Engine:** GitHub Actions
*   **IDE Support:** Visual Studio Code (Configured for optimal TS compilation)

## 📦 How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd playwright-automation-portfolio
   ```

2. **Install all necessary dependencies:**
   ```bash
   npm install
   ```

3. **Execute the automated tests in Headless mode:**
   ```bash
   npx playwright test
   ```

4. **Launch Playwright's Interactive UI Mode:**
   ```bash
   npx playwright test --ui
   ```
