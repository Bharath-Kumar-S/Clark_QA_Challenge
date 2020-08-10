const { By, until, Key } = require('selenium-webdriver');
const { click, sendKeys } = require('../utilities/utility').webelement_actions;

class infopage {

    constructor() {
        this.whoToInsure = {
            meAlone: `xpath|*//h2[text()="Mich alleine"]`,
            familyMe: `xpath|*//h2[text()="Meine Angehörigen in häuslicher Gemeinschaft und mich"]`
        };
        this.listedCase = {
            publicSector: `xpath|*//h2[text()="Ich bin im öffentlichen Dienst beschäftigt"]`,
            pension: `xpath|*//h2[text()="Ich beziehe Altersrente oder Pension (Ab dem 60. Lebensjahr)"]`,
            other: `xpath|*//h2[text()="Keiner der Fälle trifft auch mich zu"]`
        };
        this.partofDamage = {
            oneFiftyEuros: `id|Gerne bin ich bereit bei einem Schaden bis zu 150,-EUR selbst zu zahlen, wenn dadurch meine Prämie sinkt`,
            nochange: `xpath|//*[contains(text(),"Im Falle eines Schadens soll meine Geldbörse nicht belastet werden")]`
        };
        this.furtherInfo = `css|.cucumber-text-input`,
        this.requestQuote = `xpath|//button[text()="Angebot anfordern"]`
        this.further = `xpath|*//button[text()="Weiter"]`;
        this.toOffer = `xpath|//*[text()="Zum Angebot"]`;
    }

    async InsureFor(driver, who) {
        let { familyMe, meAlone } = this.whoToInsure;
        switch (String(who)) {
            case `Me alone`:
                await click(driver, meAlone);
                break;
        }
        await this.selectFurther(driver);
    }

    async selectCase(driver,Case){
        let { other, pension, publicSector } = this.listedCase;
        switch (String(Case)) {
            case `None of the cases apply to me either`:
                await click(driver, other);
                break;
        }
        await this.selectFurther(driver);
    }

    async selectPartofDamage(driver, damagePart) {
        let {nochange,oneFiftyEuros} = this.partofDamage;
        switch (String(damagePart)) {
            case `Im Falle eines Schadens soll meine Geldbörse nicht belastet werden`:
                await driver.executeScript(`document.querySelector('[id="Gerne bin ich bereit bei einem Schaden bis zu 150,-EUR selbst zu zahlen, wenn dadurch meine Prämie sinkt"]').click()`)
                break;
        }
    }

    async selectFurther(driver) {
        await driver.sleep(1000);
        await click(driver, this.further);
    }

    async provideAdditionalInfo(driver,additionalInfo){
        await sendKeys(driver,this.furtherInfo,additionalInfo)
        
    }

    async getQuote(driver){
        await click(driver,this.requestQuote);
    }

    async viewOffer(driver){
      
        await click(driver,this.toOffer);
  
      }

}
exports.infopage = new infopage();