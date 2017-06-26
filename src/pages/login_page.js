'use strict';

class LoginPage {

    get usernameInput()  { return browser.element('#username'); }
    get passwordInput()  { return browser.element('#password'); }
    get loginButton()    { return browser.element("[type='submit'] .fa-sign-in"); }
    get errorLabel()     { return browser.element('.flash.error'); }

    setUsername(username){
        this.usernameInput.waitForVisible();
        this.usernameInput.setValue(username);
    }

    setPassword(username){
        this.passwordInput.waitForVisible();
        this.passwordInput.setValue(username);
    }

    clickLoginButton(){
        this.loginButton.waitForVisible();
        this.loginButton.click();
    }

    getErrorLabel(){
        this.errorLabel.waitForVisible();
        return this.errorLabel.getText().trim().replace(/\r?\n|\r/,"");
    }

    isLoginButtonPresent(){
        return this.loginButton.isVisible();
    }

}

module.exports = new LoginPage();