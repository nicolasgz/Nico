'use strict';
var Utils = require('../pages/utils_page.js');

class AccountsPage {

    get accountsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isAccountsLabelPresent() {    
    	return Utils.isElementPresent(this.accountsLabel);
    }

}

module.exports = new AccountsPage();



