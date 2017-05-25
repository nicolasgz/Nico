'use strict';
var Utils = require('../pages/utils_page.js');

class CampaignsPage {

    get CampaignsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isCampaignsLabelPresent() {    
    	return Utils.isElementPresent(this.CampaignsLabel);
    }

}

module.exports = new CampaignsPage();