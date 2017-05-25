'use strict';

var Utils = require('../pages/utils_page.js');

class CasesPage {

    get casesLabel()  	{ return browser.element('.slds-breadcrumb__item .uiOutputText'); }

    isCasesLabelPresent() {
    	return Utils.isElementPresent(this.casesLabel);

    }

}

module.exports = new CasesPage();