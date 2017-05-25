'use strict';
var Utils = require('../pages/utils_page.js');

class TasksPage {

    get TasksLabel()  	{ return browser.element('.active .slds-text-title--caps.slds-line-height--reset'); }

    isTasksLabelPresent() {    
    	return Utils.isElementPresent(this.TasksLabel);
    }

}

module.exports = new TasksPage();









