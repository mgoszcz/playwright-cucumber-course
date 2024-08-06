const { Given, When, Then} = require("@cucumber/cucumber")
const {LoginPage} = require('../page-objects/loginPage');

const loginPage = new LoginPage();

Given('I open the login page', async function() {
    await loginPage.navigateToLoginPage();
})

When('I fill login form with valid credentials', async function() {
    await loginPage.submitLoginForm();
})

Then('I should see the inventory page', async function() {
    await loginPage.assertUserIsLoggedIn();
})

Then("I wait for 3 seconds", async function() {
  await loginPage.pause(3000);
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function(username, password) {
    await loginPage.fillLoginForm(username, password);
})