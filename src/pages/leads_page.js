'use strict';
var Utils = require('../pages/utils_page.js');

class LeadsPage {

    get leadsLabel()  	{ return browser.element('.active [role="navigation"] .slds-breadcrumb__item .uiOutputText'); }

    isLeadsLabelPresent() {
      return Utils.isElementPresent(this.leadsLabel);
      // console.log(">>>>>>>>>>>>>>>>>IS PRESENT>>>>>>>>>>>>>>>>>>")
    }

}

module.exports = new LeadsPage();