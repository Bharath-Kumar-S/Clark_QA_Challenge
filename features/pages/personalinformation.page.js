const { By, until, Key } = require('selenium-webdriver');
const { setDefaultService } = require('selenium-webdriver/chrome');
const { click, sendKeys } = require('../utilities/utility').webelement_actions;

class personalinformation {

    constructor() {
       this.male = `css|[value="male"]`,
       this.female = `css|[value="female"]`,
       this.fname = `css|[name="firstName"]`,
       this.sname = `css|[name="lastName"]`,
       this.dob = `css|[name="birthdate"]`,
       this.street = `css|[name="street"]`,
       this.houseNo = `css|[name="houseNumber"]`,
       this.place = `css|[name="city"]`,
       this.postCode = `css|[name="zipcode"]`,
       this.phoneNumber = `css|[name="phoneNumber"]`,
       this.further = `xpath|//button`
    }

    async providePersonalInfo(driver,gender,fname,sname,dob,street,houseNo,place,postCode,phoneNumber){
      await sendKeys(driver,this.fname,fname);
      await sendKeys(driver,this.sname,sname);
      await sendKeys(driver,this.dob,dob);
      await sendKeys(driver,this.street, street);
      await sendKeys(driver,this.houseNo, houseNo);
      await sendKeys(driver,this.place,place);
      await sendKeys(driver,this.postCode,postCode);
      await sendKeys(driver,this.phoneNumber,phoneNumber);
      await sendKeys(driver,this.fname,fname);
      await sendKeys(driver,this.sname,sname);
      await sendKeys(driver,this.dob,dob);
      gender === `Male` ? await driver.executeScript(`document.querySelector('[value="male"]').click()`) : await click(driver,this.female);
      
      await click(driver,this.further);

    }

}
exports.personalinformation = new personalinformation();