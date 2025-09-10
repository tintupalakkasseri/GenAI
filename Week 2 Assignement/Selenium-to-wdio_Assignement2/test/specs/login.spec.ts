import { LoginPage } from '../pageobjects/loginPage';

/**
 * Test suite to validate login functionality
 */
describe('Login Page Test Suite', () => {

    // Create object for LoginPage
    const loginPage = new LoginPage();

    it('should login with valid credentials and print the page title', async () => {
        // Step 1: Open the login page
        await loginPage.open();

        // Step 2: Maximize the browser window
        await browser.maximizeWindow();

        // Step 3: Set implicit wait for all elements
        await browser.setTimeout({ implicit: 15000 });

        // Step 4: Enter the username
        await loginPage.enterUsername('DemoSalesManager');

        // Step 5: Enter the password
        await loginPage.enterPassword('crmsfa');

        // Step 6: Click the login button
        await loginPage.clickLogin();

        // Step 7: Get and print the page title
        const title = await loginPage.getPageTitle();
        console.log('Page Title:', title);
    });
});
