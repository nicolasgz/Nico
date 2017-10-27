'use strict';

class common{
	

	//Selectors
	get yelpLoadingIcon() { return '.search-results-block .throbber-overlay[style*=\'display: none\']';}
        

	getYelpLoadingIcon(){

		return browser.element(this.yelpLoadingIcon);

	}

	waitForYelpLoadingIconToDisappear(){

		browser.waitForExist(".search-results-block .throbber-overlay[style*='display: none']");

	}


}


module.exports = new common();

