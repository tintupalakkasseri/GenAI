// test/pageobjects/home.page.ts
import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * Page class containing selectors and methods for Home page after login
 */
class HomePage extends Page {

    public get linkCRMSFA () {
        return $('=CRM/SFA')
    }

    /**
     * Method to click CRM/SFA link
     */
    public async clickCRMSFA () {
        await this.linkCRMSFA.waitForClickable({ timeout: 10000 })
        await this.linkCRMSFA.click()
    }
}

export default new HomePage()
