'use strict';

class ForgotPassPage {

    get forgotPassForm()  { return browser.element('#forgotPassForm'); }

  	isForgotPassFormVisible(){
		this.forgotPassForm.isVisible();
    }

}

module.exports = new ForgotPassPage();