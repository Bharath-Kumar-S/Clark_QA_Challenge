// const { By, until, Key } = require('selenium-webdriver');
// const { setDefaultService } = require('selenium-webdriver/chrome');
// const { click, sendKeys } = require('../utilities/utility').webelement_actions;

// class paymentpage {

//     constructor() {
//         this.cardNo = `css|.cucumber-offer-iban-input`;
//         this.directDebit = `css|[id="ibanCheck"]`;
//         this.proceed = `xpath|//button[text()="Tarif bestellen"]`
//     }

//     async provideCardDetails(driver, cardNumber) {
//         await sendKeys(driver, this.cardNo, cardNumber);
//         await driver.executeScript(`document.querySelector('[id="ibanCheck"]').click()`)
//         // await click(driver,this.directDebit);
//         await click(driver,this.proceed);
//         await click(driver,`xpath|//button[text()="Tarif bestellen"]`);
//         await click(driver,`xpath|//button[text()="Jetzt verbindlich kaufen"]`)
//         await click(driver,`xpath|//button[text()="Zurück zur Übersicht"]`);
//         await click(driver,`xpath|//*[text()="Nein"]`);
//         await click(driver,`css|.cucumber-close-modal`);
//     }

// }
// exports.paymentpage = new paymentpage();

const { By, until, Key } = require('selenium-webdriver');
const { setDefaultService } = require('selenium-webdriver/chrome');
const { click, sendKeys } = require('../utilities/utility').webelement_actions;


class paymentPurchasepage {

    constructor() {
        this.payment = {
            accNo : `css|.cucumber-offer-iban-input`,
            directDebit : `css|[id="ibanCheck"]`,
            proceed : `xpath|//button[text()="Tarif bestellen"]`
        };
        this.OrderTarif_ = {
            ordTariff: `xpath|//button[text()="Tarif bestellen"]`,
            bindingPurchase: `xpath|//button[text()="Jetzt verbindlich kaufen"]`,
            overview: `xpath|//button[text()="Zurück zur Übersicht"]`
        }
    }

    async provideAccountDetails(driver, accountNumber) {
        let { accNo, directDebit, proceed } = this.payment;
        await sendKeys(driver, accNo, accountNumber);
        await driver.executeScript(`document.querySelector('[id="ibanCheck"]').click()`)
        // await click(driver,this.directDebit);
        await click(driver, proceed);
    }

    async orderTariff(driver) {
        let { bindingPurchase, ordTariff, overview } = this.OrderTarif_;
        await click(driver, ordTariff);
        await click(driver, bindingPurchase)
        await click(driver, overview);
        //close the popups
        await click(driver, `xpath|//*[text()="Nein"]`);
        await click(driver, `css|.cucumber-close-modal`);

    }

}
exports.paymentPurchasepage = new paymentPurchasepage();