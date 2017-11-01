'use strict';

class Common{
	
	get yelpLoadingIconSelector() { return '.search-results-block .throbber-overlay[style*=\'display: none\']';}
        
	getYelpLoadingIcon(){

		return browser.element(this.yelpLoadingIconSelector);

	}
	waitForYelpLoadingIconToDisappear(){

		browser.waitForExist(this.yelpLoadingIconSelector);
	}
}
module.exports = new Common();

