'use strict';
var Utils = require('../pages/utils_page.js');

class OpportunitiesPage {

    get opportunitiesLabel()  	{ return browser.element('.active .slds-breadcrumb__item .uiOutputText'); }

    isOpportunitiesLabelPresent() {    
    	return Utils.isElementPresent(this.opportunitiesLabel);
	}

}

module.exports = new OpportunitiesPage();