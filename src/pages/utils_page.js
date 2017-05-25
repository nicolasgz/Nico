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

    waitForElementExists(element, timeout){
      var retries = 5;
      var success = false;

      console.log('best wait ever: >>>>>>>>>>>>>>');

      while (retries-- > 0 && !(success = element.isExisting())) {
        browser.pause(2000);
      }
    }

  isElementPresent(element){
    this.waitForElementExists(element, 2000);
    return element.isExisting();
  }

}

module.exports = new UtilsPage();