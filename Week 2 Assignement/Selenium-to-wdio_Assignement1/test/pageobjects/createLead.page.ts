import { $ } from '@wdio/globals';
import Page from './page.js';
/**
 * Sub-page containing selectors and methods for the Create Lead page.
 */
class CreateLeadPage extends Page {
    /**
     * Define selectors using getter methods.
     */
    public get linkCreateLead() {
        return $('=Create Lead');
    }
    public get inputCompanyName() {
        return $('#createLeadForm_companyName');
    }
    public get inputFirstName() {
        return $('#createLeadForm_firstName');
    }
    public get inputLastName() {
        return $('#createLeadForm_lastName');
    }
    public get dropdownSource() {
        return $('#createLeadForm_dataSourceId');
    }
    public get dropdownMarketingCampaign() {
        return $('#createLeadForm_marketingCampaignId');
    }
    public get btnSubmit() {
        return $('[name="submitButton"]');
    }

    /**
     * Method to click the 'Create Lead' link.
     */
    public async clickCreateLeadLink() {
        await this.linkCreateLead.click();
    }

    /**
     * Method to fill out the lead creation form.
     * @param {string} companyName - The company name.
     * @param {string} firstName - The first name.
     * @param {string} lastName - The last name.
     * @param {string} source - The visible text of the source dropdown option.
     * @param {string} marketingCampaign - The value of the marketing campaign dropdown option.
     */
    public async fillCreateLeadForm(companyName: string, firstName: string, lastName: string, source: string, marketingCampaign: string) {
        await this.inputCompanyName.setValue(companyName);
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.dropdownSource.selectByVisibleText(source);
        await this.dropdownMarketingCampaign.selectByAttribute('value', marketingCampaign);
    }

    /**
     * Method to click the submit button on the create lead page.
     */
    public async clickSubmitButton() {
        await this.btnSubmit.click();
    }
}
export { CreateLeadPage };
