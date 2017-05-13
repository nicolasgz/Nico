'use strict';
module.exports = {

    loginPage: {
      usernameInput: '#username',
      passwordInput: '#password'
  },

    setData: function(user, pass) {
        browser.setValue(this.loginPage.usernameInput, 'test123');
        browser.setValue(this.loginPage.passwordInput, '123test');
    }
};