'use strict';

module.exports = {

    utils: {},

    goTo: function(site){
        browser.url(site);
        browser.setViewportSize({
        width: 2500,
        height: 1440,
    })},

    getUrl: function(){
    	return browser.getUrl();
    },

};