import { $, browser } from '@wdio/globals'

/**
 * Page object class for the Login Page
 */
export class LoginPage {
    /**
     * Selector for the username input field
     */
    public get inputUsername() {
        return $('#username');
    }

    /**
     * Selector for the password input field
     */
    public get inputPassword() {
        return $('#password');
    }

    /**
     * Selector for the login button
     */
    public get btnLogin() {
        return $('.decorativeSubmit');
    }

    /**
     * Method to open the login page URL
     */
    public async open(): Promise<void> {
        await browser.url('http://leaftaps.com/opentaps');
    }

    /**
     * Method to enter username in the username input field
     * @param username - The username to enter
     */
    public async enterUsername(username: string): Promise<void> {
        await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.inputUsername.setValue(username);
    }

    /**
     * Method to enter password in the password input field
     * @param password - The password to enter
     */
    public async enterPassword(password: string): Promise<void> {
        await this.inputPassword.waitForDisplayed({ timeout: 10000 });
        await this.inputPassword.setValue(password);
    }

    /**
     * Method to click the login button
     */
    public async clickLogin(): Promise<void> {
        await this.btnLogin.waitForDisplayed({ timeout: 10000 });
        await this.btnLogin.click();
    }

    /**
     * Method to retrieve the current page title
     * @returns Title of the page as a string
     */
    public async getPageTitle(): Promise<string> {
        return await browser.getTitle();
    }
}
