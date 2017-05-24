'use strict';
var Utils = require('../pages/utils_page.js');

class HeaderPage {

    get magicSelector()  	{ return browser.element('i am a selector'); }

    isBlahPresent() {
    	magicSelector.waitForVisible(5000);
      return Utils.isElementPresent(magicSelector);
    }

}

module.exports = new ContactsPage();