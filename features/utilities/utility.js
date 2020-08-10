
const { By, until, Key} = require('selenium-webdriver');

const webelement_actions = {
    click: async (driver, locator) => {
        let element = await construct_locator(driver, locator);
        await driver.wait(function() {
            return element.isDisplayed();
        }, 60000);
        await element.click();
    },
    sendKeys: async (driver,locator,text,enter) =>{
        let element = await construct_locator(driver, locator);
        enter === true ? await element.sendKeys(text, Key.RETURN): await element.sendKeys(text);
    },
    getText: async(driver,locator) =>{
        let element = await construct_locator(driver, locator);
           let text = await element.getText();
            return text;
    }
}

exports.webelement_actions = webelement_actions;

const construct_locator = async (driver, locator) => {
    let loc = locator.split('|');
    await driver.wait(until.elementLocated(By[loc[0]](loc[1])));
    return await driver.findElement(By[loc[0]](loc[1]));
}

exports.construct_locator = construct_locator