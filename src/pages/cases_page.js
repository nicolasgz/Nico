'use strict';

var Utils = require('../pages/utils_page.js');

class CasesPage {

    get casesLabel()  	{ return browser.element('.slds-breadcrumb__item .uiOutputText .lol'); }

    isCasesLabelPresent() {
    	console.log('Cases page..')
    	Utils.isElementPresent(this.casesLabel);
    }

}

module.exports = new CasesPage();