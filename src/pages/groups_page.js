'use strict';
var Utils = require('../pages/utils_page.js');

class GroupsPage {

    get groupsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isGroupsLabelPresent() {    
    	 return Utils.isElementPresent(this.groupsLabel);
    }

}

module.exports = new GroupsPage();