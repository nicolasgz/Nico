'use strict';
var Utils = require('../pages/utils_page.js');

class DashboardsPage {

    get DashboardsLabel()  	{ return browser.element('.entityName .uiOutputText'); }

    isDashboardsLabelPresent() {    
    	return Utils.isElementPresent(this.DashboardsLabel);
    }

}

module.exports = new DashboardsPage();