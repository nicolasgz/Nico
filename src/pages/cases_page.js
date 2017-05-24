'use strict';
var Utils = require('../pages/utils_page.js');

class CasesPage {

    get casesLabel()  	{ return browser.element('.slds-breadcrumb__item .uiOutputText ZARAZA'); }

    isCasesLabelPresent() {    	
    	Utils.isElementPresent(this.casesLabel);
  //   	this.casesLabel.waitForExist(3000);
		// if (this.casesLabel.isExisting == true){
		// 	console.log ('Label is present')}
		// 	else {console.log('Label is not present')};
    }

}

module.exports = new CasesPage();