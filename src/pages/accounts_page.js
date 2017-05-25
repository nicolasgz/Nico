'use strict';
var Utils = require('../pages/utils_page.js');

class AccountsPage {

    get AccountsLabel()  	{ return browser.element('..active .slds-breadcrumb.slds-list--horizontal'); }

    isAccountsLabelPresent() {    
    	return Utils.isElementPresent(this.AccountsLabel);
    }

}

module.exports = new AccountsPage();



