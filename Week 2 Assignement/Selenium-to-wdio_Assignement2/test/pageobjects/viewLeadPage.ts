import { $ } from '@wdio/globals';
import Page from './page.js';
/**
 * Sub-page representing the newly created lead's view page.
 */
class ViewLeadPage extends Page {
    /**
     * Method to get the current page title.
     * @returns {Promise<string>} - The title of the page.
     */
    public async getPageTitle() {
        return browser.getTitle();
    }
}
export { ViewLeadPage };