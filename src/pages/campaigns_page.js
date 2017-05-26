'use strict';
var Utils = require('../pages/utils_page.js');

class CampaignsPage {

    get campaignsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isCampaignsLabelPresent() {    
    	return Utils.isElementPresent(this.campaignsLabel);
    }

}

module.exports = new CampaignsPage();