'use strict';
var Utils = require('../pages/utils_page.js');

class GroupsPage {

    get GroupsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isGroupsLabelPresent() {    
    	 return Utils.isElementPresent(this.GroupsLabel;
    }

}

module.exports = new GroupsPage();