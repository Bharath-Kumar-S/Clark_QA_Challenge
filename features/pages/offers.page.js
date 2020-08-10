const { By, until, Key } = require('selenium-webdriver');
const { click, sendKeys } = require('../utilities/utility').webelement_actions;

class offerpage {

    constructor() {
        this.recommendedOffer = `xpath|//*[text()="Empfehlung"]/../../following-sibling::button`;
    }

    async selectRecommendedOffer(driver) {
        await click(driver,this.recommendedOffer);
    }

}
exports.offerpage = new offerpage();