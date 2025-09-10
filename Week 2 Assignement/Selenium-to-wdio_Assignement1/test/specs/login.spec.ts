import LoginPage from '../../src/pageobjects/login.page.js'

/**
 * Create object for imported page class.
 */
const loginPage = new LoginPage()

describe('Leaftaps Login', () => {
    it('should login with valid credentials and print the title', async () => {
        // Open the application login page
        await loginPage.open()

        // Set implicit wait for elements (15000 ms)
        await loginPage.setImplicitWait(15000)

        // Maximize the browser window
        await loginPage.maximizeWindow()

        // Perform login using provided credentials
        await loginPage.login('DemoSalesManager', 'crmsfa')

        // Get and print the page title
        const title = await loginPage.getPageTitle()
        console.log(title)
    })
})
