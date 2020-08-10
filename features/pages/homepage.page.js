const { get } = require('selenium-webdriver/http');
const { click } = require('../utilities/utility').webelement_actions;

class homepage {
    constructor() {
        this.deals = `css|[href="/de/app/offers/request"]`;  /* Angebote */
    }

    async navigateTab(driver, tab) {
        switch (String(tab)) {
            case `Angebote`: click(driver, this.deals);
                break;
        }
    }

}
exports.homepage = new homepage();