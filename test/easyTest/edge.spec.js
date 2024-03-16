const {Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const edge = require('selenium-webdriver/edge');

suite(function (env) {
  describe('Open Edge', function () {
    let driver;

    before(async function () {
      let options = new edge.Options();
      driver = await env.builder()
        .setEdgeOptions(options)
        .build();
    });

    after(async () => await driver.quit());

    it('Basic Edge test', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    });

    // it('First Selenium script with mocha', async function () {
    //     await driver.get('https://jsframeworks.ysojs.se/');
        
    //     let title = await driver.getTitle();
    //     assert.equal("Yso App", title);
    //     console.log(title);
      
    //     await driver.manage().setTimeouts({implicit: 500});
    //     //driver.manage().timeouts().implicitlyWait(2000); // selenium driver 3.0.0
    
    //     // 3 easy test cases
    //     // Check a navigation link
    //     target = 'API'
    //     let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
    //       return element;
    //     });
    //       await navLink.click();
        
    //     // Check the URL 
    //     target = '/api';
    //     let url = await driver.getCurrentUrl().then(function(url){ return url });
    //     console.log(url)
    //     assert.ok(url.endsWith(target));
    
    //     // Find the token text
    //     let btns = await driver.findElements(By.className("submitBtn")).then(function(element){return element} );
    //     let text =  await btns[0].getText();
    //     assert.equal(text, 'TOKEN');
      
    //   });


  });
}, { browsers: [Browser.EDGE]});