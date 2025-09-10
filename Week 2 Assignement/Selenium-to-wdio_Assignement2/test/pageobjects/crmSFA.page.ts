import { $ } from '@wdio/globals';
import Page from './page.js';
/**
 * Sub-page containing selectors and methods for the CRM/SFA page.
 */
class CrmSfaPage extends Page {
    /**
     * Define selectors using getter methods.
     */
    public get linkCrmSfa() {
        return $('=CRM/SFA');
    }

    /**
     * Method to click the CRM/SFA link.
     */
    public async clickCrmSfa() {
        await this.linkCrmSfa.click();
    }
}
export { CrmSfaPage };
