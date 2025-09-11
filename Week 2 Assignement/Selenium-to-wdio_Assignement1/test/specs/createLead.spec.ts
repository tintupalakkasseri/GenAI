// test/specs/createlead.spec.ts
import { expect } from 'chai'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import CreateLeadPage from '../pageobjects/createLead.page.js'

describe('Create Lead application', () => {
    it('should create a new lead successfully', async () => {
        // Step 1: Open login page
        await LoginPage.open()

        // Step 2: Perform login
        await LoginPage.login('DemoSalesManager', 'crmsfa')

        // Step 3: Verify title after login
        let title = await browser.getTitle()
        console.log(title)
        expect(title).to.not.be.empty

        // Step 4: Click CRM/SFA
        await HomePage.clickCRMSFA()

        // Step 5: Navigate to Create Lead
        await CreateLeadPage.openCreateLeadForm()

        // Step 6: Create a new lead
        await CreateLeadPage.createLead('TestLeaf', 'Babu', 'Manickam')

        // Step 7: Verify the new title
        title = await CreateLeadPage.getPageTitle()
        console.log(title)
        expect(title).to.not.be.empty
    })
})
