'use strict';
module.exports = {

    utils: {},

    goTo: function(site){
        browser.url(site);
    },

    isElementVisible: function(visibility, element){
    	const isVisible = browser.isVisible(element);

	    if (!visibility) {
	        expect(isVisible).to.not
	            .equal(true, `Expected element "${element}" not to be visible`);
	    } else {
	        expect(isVisible).to
	            .equal(true, `Expected element "${element}" to be visible`);
	    }
    }
};