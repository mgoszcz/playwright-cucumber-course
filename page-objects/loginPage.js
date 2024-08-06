class LoginPage {
    async navigateToLoginPage() {
        await page.goto('https://www.saucedemo.com/');
    }

    async submitLoginForm() {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    }

    async fillLoginForm(username, password) {
        await page.fill('#user-name', username);
        await page.fill('#password', password);
        await page.click('#login-button');
    }


    async assertUserIsLoggedIn() {
        await page.waitForSelector('.inventory_list')
    }

    async pause(ms) {
        await page.waitForTimeout(ms);
    }
}

module.exports = { LoginPage }