const { Given, When, Then} = require("@cucumber/cucumber")

Given('I open the login page', async function() {
    await page.goto('https://www.saucedemo.com/');
})

When('I fill login form with valid credentials', async function() {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
})

Then('I should see the inventory page', async function() {
      await page.waitForSelector('.inventory_list')
})