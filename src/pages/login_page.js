'use strict';
module.exports = {

    loginPage: {
      usernameInput: 	'#username',
      passwordInput: 	'#password',
      loginButton: 		'#Login',
      errorMessage: 	'#error'
  	},

    setData: function(user, pass) {
        browser.setValue(this.loginPage.usernameInput, user);
        browser.setValue(this.loginPage.passwordInput, pass);
    },

    clickLoginButton: function() {
    	browser.click(this.loginPage.loginButton);
    },

    isErrorMessageVisible: function(visibility){
    	return browser.isVisible(this.loginPage.errorMessage);
    }
    
};