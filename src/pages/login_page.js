'use strict';

class LoginPage {

    get usernameInput()  { return browser.element('#username'); }
    get passwordInput()  { return browser.element('#password'); }
    get loginButton()  { return browser.element('#Login'); }
    get rememberCheckbox()  { return browser.element('#rememberUn'); }
    get rememberLabel()  { return browser.element('label[for="rememberUn"'); }
    get forgotPassword()  { return browser.element('#forgot_password_link'); }
    get logo()  { return browser.element('#logo'); }
    get usernameLabel()  { return browser.element('label[for="username"'); }
    get passwordLabel()  { return browser.element('label[for="password"'); }
    get errorMessageLabel()  { return browser.element('#error'); }

    logoIsVisible(){
        this.logo.isVisible();
    }

    rememberLabelIsVisible(){
        this.rememberLabel.isVisible();
    }

    usernameLabelIsVisible(){
        this.usernameLabel.isVisible();
    }

    passwordLabelIsVisible(){
        this.passwordLabel.isVisible();
    }

    usernameInputIsVisible(){
        this.usernameInput.isVisible();
    }

    passwordInputIsVisible(){
        this.passwordInput.isVisible();
    }

    loginButtonIsVisible(){
        this.loginButton.isVisible();
    }

    rememberCheckboxIsVisible(){
        this.rememberCheckbox.isVisible();
    }

    rememberLabelIsVisible(){
        this.rememberLabel.isVisible();
    }

    forgotPasswordIsVisible(){
        this.forgotPassword.isVisible();
    }

    setData(user, pass) {
        this.usernameInput.setValue(user);
        this.passwordInput.setValue(pass);
    }

    login(){
        this.loginButton.click();
    }

    forgot(){
        this.forgotPassword.click();
    }

    getErrorMessage(){
        return this.errorMessageLabel.getText();
    }

}

module.exports = new LoginPage();