'use strict';
var Utils = require('../pages/utils_page.js');

class ReportsPage {

    get reportsLabel()  	{ return browser.element('.entityName .uiOutputText'); }

    isReportsLabelPresent() {    
    	return Utils.isElementPresent(this.reportsLabel);
    }

}

module.exports = new ReportsPage();