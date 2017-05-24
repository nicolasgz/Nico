'use strict';

class UtilsPage {

    goTo(site){
        browser.url(site);
    }

    getUrl() {
      return browser.getUrl();
    }

	waitAndClickForSelector(selector, timeout){
  		browser.waitForVisible(selector, timeout);
  		browser.click(selector);
  	}

	waitAndClickForElement(element, timeout){
      element.waitForVisible(timeout);
      element.click();
    }

  clickOnElementWithTitle(all_elements, title){
      var my_element;
      all_elements.waitForVisible(50000);
      all_elements.value.forEach(function(elem){
          if (browser.elementIdText(elem.ELEMENT).value == title) {
              	my_element = elem.ELEMENT;
          }
      });

      if (my_element != null) {
        browser.elementIdClick(my_element);
        return true;
      }else{
        return false;
      }
      
    }

    theBestWaitEver(element, timeout){
      var retries = 5;
      var success = false;

      console.log('best wait ever: >>>>>>>>>>>>>>');

      // try {
      //   console.log('ready to go >>> ');
      //   console.log('element: ' + element);
      //   console.log('element type: ' + typeof element);
      //   console.log('element value: ' + element.value);
      //   console.log('element.isExisting(): ' + element.isExisting());
      // }catch(err){
      //   console.log('Error on element exists: ' + err);
      // }

      console.log('type of element value: ' + typeof element.value)

      while (retries-- > 0 && (element.value == null)){ //&& !(success = element.isExisting())) {
        console.log('in the while.. before')
        try{
          console.log('browser: ' + browser);
          console.log('browser options: ' + browser.desiredCapabilities);
          console.log(browser.options);
          console.log('timeout: ' + timeout);
          console.log('timeout type: ' + typeof timeout);
          browser.pause(2000);
          console.log('in the while.. after')
        }catch(err){
          console.log(err);
        }        
      }

      console.log('NO MORE WAIT..')

      // try {
      //   while (retries-- > 0 && (element.value == null)){ //&& !(success = element.isExisting())) {
      //     // console.log('pause!');
      //     // console.log('retries: ' + retries);
      //     // console.log('success: ' + success);
      //     // console.log('element.isExisting(): ' + element.isExisting());

      //     browser.pause(timeout);        
      //   }
      // }catch(err){
      //   console.log('Error: ' + err);
      // }

    }

  isElementPresent(element){
    try {
      console.log('in the try (1)');
      this.theBestWaitEver(element, 2000);
      // element.waitForVisible(5000);
      console.log('in the try (2)');
      console.log('element');
      // return element.getText() === 'I am now different'
      return (element.value != null);
    } catch(err) {
        console.log('in the try (3)');
        console.log('>>>>>>>>>>>>>>> Error: ' + err);
        
        // logMyErrors(err);
    }
    
    console.log('in the try (4)');
    return false;
    
  }


}

module.exports = new UtilsPage();