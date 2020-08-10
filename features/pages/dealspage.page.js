const { By, until, Key } = require('selenium-webdriver');
const { click, sendKeys, getText } = require('../utilities/utility').webelement_actions;

class dealspage {

    constructor() {
        this.personalLiability = `css|[title="Privathaftpflicht"]`;  /* Privathaftpflicht */
        this.searchDeals = `css|[data-test-generic-selection-input]`;
        this.selectedDeal = `css|[data-test-start-screen-category]`;
        this.confDeal = `css|button[data-test-start-screen-continue]`;
    }

    async selectdeal(driver, deal) {
        switch (String(deal)) {
            case `Pri­vat­haft­pflicht`:
                await click(driver, this.personalLiability);
                break;
        }
    }

    async getSelectedDeal(driver) {
        let deal = await getText(driver, this.selectedDeal)
        return deal;
    }

    async confirmDeal(driver) {
        await click(driver, this.confDeal)
    }

}
exports.dealspage = new dealspage();