// test/pageobjects/login.page.ts
import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * Page class containing selectors and methods for login page
 */
class LoginPage extends Page {

    public get inputUsername () {
        return $('#username')
    }

    public get inputPassword () {
        return $('#password')
    }

    public get btnLogin () {
        return $('.decorativeSubmit')
    }

    /**
     * Method to login with username and password
     * @param username user name value
     * @param password password value
     */
    public async login (username: string, password: string) {
        await this.inputUsername.waitForDisplayed({ timeout: 10000 })
        await this.inputUsername.setValue(username)
        await this.inputPassword.waitForDisplayed({ timeout: 10000 })
        await this.inputPassword.setValue(password)
        await this.btnLogin.waitForClickable({ timeout: 10000 })
        await this.btnLogin.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('opentaps')
    }
}

export default new LoginPage()
