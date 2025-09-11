// test/pageobjects/createlead.page.ts
import { $, browser } from '@wdio/globals'
import Page from './page.js'

/**
 * Page class containing selectors and methods for Create Lead page
 */
class CreateLeadPage extends Page {

    public get linkCreateLead () {
        return $('=Create Lead')
    }

    public get inputCompanyName () {
        return $('#createLeadForm_companyName')
    }

    public get inputFirstName () {
        return $('#createLeadForm_firstName')
    }

    public get inputLastName () {
        return $('#createLeadForm_lastName')
    }

    public get dropdownSource () {
        return $('#createLeadForm_dataSourceId')
    }

    public get dropdownMarketing () {
        return $('#createLeadForm_marketingCampaignId')
    }

    public get btnSubmit () {
        return $('[name="submitButton"]')
    }

    /**
     * Method to navigate to Create Lead form
     */
    public async openCreateLeadForm () {
        await this.linkCreateLead.waitForClickable({ timeout: 10000 })
        await this.linkCreateLead.click()
    }

    /**
     * Method to create a new lead
     * @param company company name
     * @param first first name
     * @param last last name
     */
    public async createLead (company: string, first: string, last: string) {
        await this.inputCompanyName.waitForDisplayed({ timeout: 10000 })
        await this.inputCompanyName.setValue(company)
        await this.inputFirstName.setValue(first)
        await this.inputLastName.setValue(last)

        await (await this.dropdownSource).selectByVisibleText('Employee')
        await (await this.dropdownMarketing).selectByAttribute('value', '9001')

        await this.btnSubmit.waitForClickable({ timeout: 10000 })
        await this.btnSubmit.click()
    }

    /**
     * Get the current page title
     */
    public async getPageTitle () {
        return browser.getTitle()
    }
}

export default new CreateLeadPage()
