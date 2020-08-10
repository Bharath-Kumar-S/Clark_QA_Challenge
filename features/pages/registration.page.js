const { By, until, Key } = require('selenium-webdriver');
const { click, sendKeys } = require('../utilities/utility').webelement_actions;

class registrationpage {

    constructor() {
        this.email = `css|[data-test-registration-email-input]`;
        this.password = `css|[data-test-password-input]`;
        this.join = `css|button[type="submit"]`
    }

    async registerWithEmail(driver,email,password){
        await sendKeys(driver,this.email,`${Math.floor(Math.random() * 10000) + 1}${email}`);
        await sendKeys(driver,this.password,password);
        await click(driver,this.join);
    }
}
exports.registrationpage = new registrationpage();