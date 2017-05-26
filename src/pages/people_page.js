'use strict';
var Utils = require('../pages/utils_page.js');

class PeoplePage {

    get peopleLabel()  	{ return browser.element('.slds-breadcrumb.slds-list--horizontal'); }

    isPeopleLabelPresent() {
      return Utils.isElementPresent(this.peopleLabel);
    }

}

module.exports = new PeoplePage();