'use strict';

module.exports = {

loginPage: {
        usernameInput:      '#username',
        passwordInput:      '#password',
        loginButton:        '#Login',
        rememberCheckbox:   '#rememberUn',
        rememberLabel:      'label[for="rememberUn"', 
        forgotPassword:     '#forgot_password_link',
        logo:               '#logo',
        usernameLabel:      'label[for="username"',
        passwordLabel:      'label[for="password"',
        errorMessage:       '#error'
    },

    logoIsVisible: function(){
        browser.isVisible(this.loginPage.logo);
    },

    rememberLabelIsVisible: function(){
        browser.isVisible(this.loginPage.rememberLabel);
    },

    usernameLabelIsVisible: function(){
        browser.isVisible(this.loginPage.usernameLabel);
    },

    passwordLabelIsVisible: function(){
        browser.isVisible(this.loginPage.passwordLabel);
    },

    usernameInputIsVisible: function(){
        browser.isVisible(this.loginPage.usernameInput);
    },

    passwordInputIsVisible: function(){
        browser.isVisible(this.loginPage.passwordInput);
    },

    loginButtonIsVisible: function(){
        browser.isVisible(this.loginPage.loginButton);
    },

    rememberCheckboxIsVisible: function(){
        browser.isVisible(this.loginPage.rememberCheckbox);
    },

    rememberLabelIsVisible: function(){
        browser.isVisible(this.loginPage.rememberLabel);
    },
    forgotPasswordIsVisible: function(){
        browser.isVisible(this.loginPage.forgotPassword);
    },

    setData: function(user, pass) {
        browser.setValue(this.loginPage.usernameInput, user);
        browser.setValue(this.loginPage.passwordInput, pass);
    },

    login: function(){
        browser.click(this.loginPage.loginButton)
    },

    forgot: function(){
        browser.click(this.loginPage.forgotPassword)
    },
    
    getErrorMessage: function(){
        return browser.getText(this.loginPage.errorMessage);
    },

    URLnotLogin: function(){
        var pageUrl = browser.getUrl();
        console.log(pageUrl);
        assert.notEqual(pageUrl, 'https://login.salesforce.com/');
    },
     URLisLogin: function(){
        var pageUrl = browser.getUrl();
        console.log(pageUrl);
        assert.equal(pageUrl, 'https://login.salesforce.com/');
    },
};

// 'use strict';

// module.exports = {

//     loginPage: {
//       usernameInput: 	'#username',
//       passwordInput: 	'#password',
//       loginButton: 		'#Login',
//       errorMessage: 	'#error'
//   	},

//     setData: function(user, pass) {
//         browser.setValue(this.loginPage.usernameInput, user);
//         browser.setValue(this.loginPage.passwordInput, pass);
//     },

//     clickLoginButton: function() {
//     	browser.click(this.loginPage.loginButton);
//     },

//     isErrorMessageVisible: function(){
//     	return browser.isVisible(this.loginPage.errorMessage);
//     }
    
// };