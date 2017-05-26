'use strict';
var Utils = require('../pages/utils_page.js');

class TasksPage {

    get tasksLabel()  	{ return browser.element('.active .slds-text-title--caps.slds-line-height--reset'); }

    isTasksLabelPresent() {    
    	return Utils.isElementPresent(this.tasksLabel);
    }

}

module.exports = new TasksPage();









