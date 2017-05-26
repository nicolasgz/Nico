'use strict';
var Utils = require('../pages/utils_page.js');

class ContactsPage {

    get contactsLabel()  	{ return browser.element('.active .slds-breadcrumb.slds-list--horizontal'); }

    isContactsLabelPresent() {
      return Utils.isElementPresent(this.contactsLabel);
    }

}

module.exports = new ContactsPage();