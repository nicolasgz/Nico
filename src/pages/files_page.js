'use strict';
var Utils = require('../pages/utils_page.js');

class FilesPage {

    get FilesLabel()  	{ return browser.element('.slds-text-heading--label.slds-line-height--reset'); }

    isFilesLabelPresent() {    
    	return Utils.isElementPresent(this.FilesLabel);
    }

}

module.exports = new FilesPage();