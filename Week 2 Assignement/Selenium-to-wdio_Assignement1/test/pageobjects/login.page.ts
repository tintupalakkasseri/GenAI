import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * Sub-page containing selectors and methods for the login page.
 */
class LoginPage extends Page {
    /**
     * Define selectors using getter methods.
     */
    public get inputUsername() {
        return $('#username');
    }
    public get inputPassword() {
        return $('#password');
    }
    public get btnSubmit() {
        return $('.decorativeSubmit');
    }

    /**
     * Method to login with username and password.
     * @param {string} username - The username to use for login.
     * @param {string} password - The password to use for login.
     */
    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * Method to open the login page.
     * @returns {Promise<string>} - The URL of the opened page.
     */
    public async open() {
        return super.open('http://leaftaps.com/opentaps');
    }
}

export { LoginPage };
