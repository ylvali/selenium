const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
//require('chromedriver');

// Works with selenium web driver 
// selenium-webdriver": "4.18.1"


// "selenium-webdriver": "3.0.0" - then crome driver is required
//   "mocha": "5.2.0"

// "dependencies": {
//   "assert": "^2.1.0",
//   "selenium-webdriver": "3.0.0"
// },
// "devDependencies": {
//   "mocha": "5.2.0"
// }

  describe('Ysojs - 3 easy testcases', function () {
    let driver;
    
    before(async function () {
      driver = await new Builder().forBrowser('firefox').build();
    });
    
    it('First Selenium script with mocha', async function () {
      await driver.get('https://jsframeworks.ysojs.se/');
      
      let title = await driver.getTitle();
      assert.equal("Yso App", title);
      console.log(title);
    
      await driver.manage().setTimeouts({implicit: 500});
      //driver.manage().timeouts().implicitlyWait(2000); // selenium driver 3.0.0
  
      // 3 easy test cases
      // Check a navigation link
      target = 'API'
      let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
        return element;
      });
        await navLink.click();
      
      // Check the URL 
      target = '/api';
      let url = await driver.getCurrentUrl().then(function(url){ return url });
      console.log(url)
      assert.ok(url.endsWith(target));
  
      // Find the token text
      let btns = await driver.findElements(By.className("submitBtn")).then(function(element){return element} );
      let text =  await btns[0].getText();
      assert.equal(text, 'TOKEN');
    
    });
  
    after(async () => await driver.quit());
  });