'use strict';

class UtilsPage{

  goTo(site){
 
      browser.url(site);
  }
 
  getUrl() {
 
    return browser.getUrl();
  }

}
module.exports = new UtilsPage();