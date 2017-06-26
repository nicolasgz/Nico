'use strict';

class LoggedInPage {

	get loggedInLabel()     { return browser.element('.flash.success'); }

    getLoggedInLabel(){
        return this.loggedInLabel.getText().trim().replace(/\r?\n|\r/,"");
    }

}

module.exports = new LoggedInPage();