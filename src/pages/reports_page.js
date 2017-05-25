'use strict';
var Utils = require('../pages/utils_page.js');

class ReportsPage {

    get ReportsLabel()  	{ return browser.element('.entityName .uiOutputText'); }

    isReportsLabelPresent() {    
    	return Utils.isElementPresent(this.ReportsLabel);
    }

}

module.exports = new ReportsPage();