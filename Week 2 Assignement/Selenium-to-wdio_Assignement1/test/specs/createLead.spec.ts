/**
 * Test suite to create a lead in the Leaftaps application.
 */
import { LoginPage } from '../pageobjects/login.page';
import { CrmSfaPage } from '../pageobjects/crmSFA.page';
import { CreateLeadPage } from '../pageobjects/createLead.page';
import { ViewLeadPage } from '../pageobjects/viewLeadPage';

describe('Create Lead', () => {
    const loginPage = new LoginPage();
    const crmSfaPage = new CrmSfaPage();
    const createLeadPage = new CreateLeadPage();
    const viewLeadPage = new ViewLeadPage();

    it('should create a new lead successfully', async () => {
        // Step 1) & 2) Launch the browser and load the URL.
        await loginPage.open();

        // Step 3) Maximize the chrome browser.
        await browser.maximizeWindow();

        // Step 4) & 5) Find username and password and type values.
        // Step 6) Click login button.
        await loginPage.login('DemoSalesManager', 'crmsfa');

        // Step 7) Verify the title.
        const title1 = await viewLeadPage.getPageTitle();
        console.log('Title after login:', title1);

        // Step 8) Click CRM/SFA link.
        await crmSfaPage.clickCrmSfa();

        // Step 9) Click Create Lead Link.
        await createLeadPage.clickCreateLeadLink();

        // Step 10) to 12 c) Fill the lead form.
        await createLeadPage.fillCreateLeadForm('TestLeaf', 'Babu', 'Manickam', 'Employee', '9001');

        // Step 13) Click Create Lead Button.
        await createLeadPage.clickSubmitButton();

        // Step 14) Print the new title.
        const title2 = await viewLeadPage.getPageTitle();
        console.log('Title after creating lead:', title2);
    });
});

