// const {Builder, By, Key, until} = require('selenium-webdriver');
 
// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').usingServer(`http://localhost:4444/wd/hub`).build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();


let {version} = require('chromedriver')
let reporter = require('cucumber-html-reporter');
 
let options = {
        theme: 'bootstrap',
        jsonFile: 'cucumber_report.json',
        output: `report/cucumber_report_${new Date()}.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Browser": `Chrome ${version}`,
            "Platform": "Windows 10",
            "Executed": "Local"
        }
    };
 
    reporter.generate(options);
    
 
    //more info on `metadata` is available in `options` section below.
 
    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
 