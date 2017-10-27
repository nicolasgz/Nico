'use strict';

class UtilsPage{
	
//Methods

  goTo(site){
 
      browser.url(site);
  }
 
  getUrl() {
 
    return browser.getUrl();
  }

}
module.exports = new UtilsPage();