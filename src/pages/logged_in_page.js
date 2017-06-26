'use strict';

class LoggedInPage {

	get loggedInLabel()     { return browser.element('.flash.success'); }

    getLoggedInLabel(){
        return this.loggedInLabel.getText();
    }

}

module.exports = new LoggedInPage();