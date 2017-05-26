'use strict';
var Utils = require('../pages/utils_page.js');

class FilesPage {

    get filesLabel()  	{ return browser.element('.slds-text-heading--label.slds-line-height--reset'); }

    isFilesLabelPresent() {    
    	return Utils.isElementPresent(this.filesLabel);
    }

}

module.exports = new FilesPage();