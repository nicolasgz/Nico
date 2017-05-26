'use strict';
var Utils = require('../pages/utils_page.js');

class CalendarPage {

    get calendarLabel()  	{ return browser.element('.slds-text-title--caps.slds-line-height--reset'); }

    isCalendarLabelPresent() {    
    	return Utils.isElementPresent(this.calendarLabel);
    }

}

module.exports = new CalendarPage();