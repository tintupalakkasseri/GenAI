import { $ } from '@wdio/globals'
import Page from '../page.js'

/**
 * Page object representing the login page for leaftaps.
 */
export default class LoginPage extends Page {
    /**
     * Username input element selector.
     */
    public get inputUsername() {
        return $('#username1')
    }

    /**
     * Password input element selector.
     */
    public get inputPassword() {
        return $('#password')
    }

    /**
     * Login button element selector.
     */
    public get btnLogin() {
        return $('.decorativeSubmit')
    }

    /**
     * Opens the application login page.
     */
    public async open() {
        await super.open('http://leaftaps.com/opentaps')
    }

    /**
     * Performs login by entering username and password and clicking login.
     * @param username username to type
     * @param password password to type
     */
    public async login(username: string, password: string) {
        await this.inputUsername.waitForDisplayed({ timeout: 10000 })
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.waitForClickable({ timeout: 5000 })
        await this.btnLogin.click()
    }

    /**
     * Returns the current page title.
     * @returns title string
     */
    public async getPageTitle(): Promise<string> {
        return (await super.getTitle())
    }
}
