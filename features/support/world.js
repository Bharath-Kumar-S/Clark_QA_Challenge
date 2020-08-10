const webdriver = require('selenium-webdriver')
const { By, until, Capabilities } = webdriver;
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

const { setWorldConstructor, Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require('cucumber')
setDefaultTimeout(40 * 1000)

function CustomWorld(callback) {
    options.addArguments('--incognito');
    options.setAcceptInsecureCerts(true);
    this.driver = new webdriver.Builder()
        .withCapabilities(caps)
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    this.driver.manage().setTimeouts( { implicit: 10000 } );
    this.driver.manage().window().maximize();
    exports.driver = this.driver;
}

Before(async function (testCase) {
    console.log('Starting e2e tests')
})

After(function () {
    console.log('Cucumber finished all features. Closing browser')
    const driver = this.driver
    return driver.close()
})


setWorldConstructor(CustomWorld)








