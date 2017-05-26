'use strict';
var Utils = require('../pages/utils_page.js');

class DashboardsPage {

    get dashboardsLabel()  	{ return browser.element('.entityName .uiOutputText'); }

    isDashboardsLabelPresent() {    
    	return Utils.isElementPresent(this.dashboardsLabel);
    }

}

module.exports = new DashboardsPage();