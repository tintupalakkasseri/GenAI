Context:
    You are an AI assistant to convert the below given selenium java script to web-driverio typescript 
Given Selenium Java script:     
package week2.day1;


import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Login {
	
	public static void main(String[] args) {
		/*
		 * Selenium Internal Architecture:
		 * 
		 * Selenium (Java) -> REST API -> ChromeDriver (binary) -> Chrome
		 * ChromeDriver -> Local Server which is built on Js, Python -> Google
		 * GeckoDriver -> Local Server Js, C++ -> Mozilla
		 * Selenium (Java) -> REST API -> GeckoDriver (binary) -> Firefox
		 * 
		 * Selenium (C#) -> REST API -> ChromeDriver (binary) -> Chrome\
		 * 
		 * Selenium Java + REST API is bundled inside the Jar File
		 * ChromeDriver -> Automate the download -> webdrivermanager 
		 * Chrome 89 -> Chrome 89 driver
		 * Chrome 89 + Mac -> Different DRIVER
		 * 
		 */
		
		/*
		 * Preconditions:
		 * 1) Selenium Java Software (
		 * 2) Browser Driver
		 * 
		 * 
		 * 
		 * Create a new package 
		 * Create a new class -> Login
		 * 
		 */
		
		// Step 0) Setup the chromedriver using webdrivermanager software
		WebDriverManager.chromedriver().setup(); // .exe or binary
		
		// Step 1) Launch the chrome browser (Class Name -> ChromeDriver)
		ChromeDriver driver = new ChromeDriver();
		
		// Step 2) Load the URL (http://leaftaps.com/opentaps/control/main) -> get
		driver.get("http://leaftaps.com/opentaps");
		
		// Step 2b) Add common time to wait for all/any elements to load (Write once)
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
		
		// Step 3) Maximize the chrome browser
		driver.manage().window().maximize();
		
		// Step 4) Find the username and type the value (DemoSalesManager)
		driver.findElement(By.id("username1")).sendKeys("DemoSalesManager");
		
		// Step 5) Find the password and type the value (crmsfa)
		driver.findElement(By.id("password")).sendKeys("crmsfa");	
		
		// Step 6) Find the login button and click
		driver.findElement(By.className("decorativeSubmit")).click();
		
		// Step 7) Verify the title 
		String title = driver.getTitle();
		System.out.println(title);

	}

}
  
    We want ONLY a web-driverio typescript for the given Selenium Java script. 

Instructions:

     - Implementation guidelines:
       - Use latest node js
       - Use webdriver io 9+ version or above version
       - Use mocha framework
       - Import required classes
       - [CRITICAL] All page class files should have export staement so that it can be imported in spec file
       - [CRITICAL] The spec file should have import statement of all page classes
       - [CRITICAL] The spec file should have objects created for all imported page classes
       - [MANDATORY] Every method should have proper comments above method signature
       - Add explicit timeout where ever possible
       - Do not send any explanation or additional text

Examples:

     - Example 1:
      
      Input Selenium Java script: 

    const { Builder, By, until } = require('selenium-webdriver');

    (async function sendCaseClick() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the site
        await driver.get('https://www.glidewelldental.com/send-a-case');

        // Wait for and accept cookies if visible
        try {
            const cookieButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Accept All Cookies']")), 5000);
            await cookieButton.click();
        } catch (e) {
            // Cookie button not found, continue
        }

        // Wait for and click the "Start a Digital Case" button
        const sendCaseButton = await driver.wait(
            until.elementLocated(By.css("a[href*='digital-case']")),
            10000
        );
        await driver.wait(until.elementIsVisible(sendCaseButton), 5000);
        await sendCaseButton.click();

    } finally {
        await driver.quit();
    }
    })();

Output code:
      import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://glidewelldental.com/${path}`)
    }
}



import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */ 

    public get btnSubmit () {
        return $('div.glidewell-header__nav-link-text=Send Case');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async sendCase () {
        await this.btnSubmit.waitForDisplayed();
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new HomePage();

import HomePage from '../pageobjects/home.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open()
        await HomePage.sendCase()
   })
})