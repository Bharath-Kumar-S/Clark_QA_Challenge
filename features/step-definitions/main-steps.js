const { Given, When, Then, Before } = require('cucumber');
const { By, until, Key } = require('selenium-webdriver');
const chai = require('chai').use(require('chai-as-promised'))
const expect = chai.expect;
const { construct_locator } = require('../utilities/utility');
const { homepage } = require('../pages/homepage.page');
const { dealspage } = require('../pages/dealspage.page');
const { infopage } = require('../pages/information.page')
const { offerpage } = require('../pages/offers.page');
const { registrationpage } = require('../pages/registration.page');
const { personalinformation } = require('../pages/personalinformation.page');
const {paymentPurchasepage} = require('../pages/payment.page');

const timeout = { timeout: 60 * 1000 };

Given(`I visit the clark landing page {string}`, timeout, async function (url) {
    await this.driver.get(url);
    expect(await this.driver.getTitle()).to.equal('Clark | Dein Versicherungsmanager');
    expect(await this.driver.getCurrentUrl()).to.equal('https://staging.clark.de/de/app/contracts');
});

When(`I click on {string} tab from the navigation bar`, timeout, async function (tab) {
    await homepage.navigateTab(this.driver, tab);
    await this.driver.wait(until.urlContains('app/offers/request'));
    expect(await this.driver.getCurrentUrl()).to.equal('https://staging.clark.de/de/app/offers/request');
});

When(`select {string} in the deals`, timeout, async function (deal) {
    await dealspage.selectdeal(this.driver, deal);
    let selectedDeal = await dealspage.getSelectedDeal(this.driver);
    expect(selectedDeal.replace(/\s/g, '')).to.equal(deal);
});

When(`confirm the deal to proceed further`, timeout, async function () {
  await dealspage.confirmDeal(this.driver);
})

When(`select insure for {string} and click on further`, timeout, async function (who) {
    await infopage.InsureFor(this.driver, who);
})

When(`select {string} and click on further`, timeout, async function (Case) {
    await infopage.selectCase(this.driver, Case);
})

When(`select {string} for event of damage`, timeout, async function (damage) {
    await infopage.selectPartofDamage(this.driver, damage);
})

When(`provide additonal information for - Do you have any further information or comments for us? - as {string}`, timeout, async function (additionalInfo) {
    await infopage.provideAdditionalInfo(this.driver, additionalInfo);
})

When(`click on Angebot anfordern`,timeout,async function(){
    await infopage.getQuote(this.driver)
})

When(`click on Zum Angebot to view the offers`,timeout,async function(){
    await infopage.viewOffer(this.driver);
})

When(`click on recommended offer`,timeout,async function(){
    await offerpage.selectRecommendedOffer(this.driver);
})

When(`register with email {string} and password {string}`,timeout,async function(email,password){
    await registrationpage.registerWithEmail(this.driver,email,password);
})

When(`provide personal information for whom the insurance belongs {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}`,timeout,async function(gender,fname,sname,dob,street,houseNo,place,postCode,phoneNumber){
    await personalinformation.providePersonalInfo(this.driver,gender,fname,sname,dob,street,houseNo,place,postCode,phoneNumber)
})

When(`provide bank account {string} for purchasing offer`,timeout,async function(accno){
    await paymentPurchasepage.provideAccountDetails(this.driver,accno);
})

When(`order tariff and open the over view page`,timeout,async function(){
    await paymentPurchasepage.orderTariff(this.driver);
})

Then(`Check if {string} is purchased`,timeout,async function(product){
    await this.driver.wait(until.elementLocated(By.xpath(`//*[text()="${product}"]`)));
    expect(await this.driver.getCurrentUrl()).to.equal('https://staging.clark.de/de/app/manager');
})