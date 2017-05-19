var LoginPage = require('../pages/login_page.js');
var UtilsPage = require('../pages/utils_page.js');

module.exports = function() {

	this.Then(/^I expect the error message visibility is "([^"]*)"$/, function(visibility) {

		var isVisible = LoginPage.isErrorMessageVisible(visibility);

		if (visibility == 'false') {
        expect(isVisible).to.not
            .equal(true, `Expected error message is not to be visible`);
	    } else {
	        expect(isVisible).to
	            .equal(true, `Expected error message to be visible`);
	    }
	    
	});

    this.When(/^I set the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
        LoginPage.setData(name, pass);
    });

    this.Then(/^I click login button$/, function(){
        LoginPage.login();
    });

    this.Then(/^I verify error message "([^"]*)" displays$/, function(expectedErrorMessage){
        var currentErrorMessage = LoginPage.getErrorMessage();
        expect(expectedErrorMessage).to
            .equal(currentErrorMessage, 
            `Expected error message: ${expectedErrorMessage} is not equal the current one: ${currentErrorMessage}`);
    });

    this.When(/^I click the forgot your password button$/, function(){
        LoginPage.forgot();
    });

    this.Then(/^Login page is displayed: "([^"]*)"$/, function(expected){
        var pageUrl = UtilsPage.getUrl();
        expect((pageUrl == 'https://login.salesforce.com/').toString()).to.equal(expected,
            `Current page: ${pageUrl} expected to be ${expected}.`);
    });

    this.Then(/^I verify Logo displays$/, function(){
        LoginPage.logoIsVisible();
    });

    this.Then(/^I verify username label displays$/, function(){
        LoginPage.usernameLabelIsVisible();
    });

    this.Then(/^I verify password label displays$/, function(){
        LoginPage.passwordLabelIsVisible();
    });

    this.Then(/^I verify username input displays$/, function(){
        LoginPage.usernameInputIsVisible();
    });

    this.Then(/^I verify password input displays$/, function(){
        LoginPage.passwordInputIsVisible();
    });

    this.Then(/^I verify login button displays$/, function(){
        LoginPage.loginButtonIsVisible();
    });

    this.Then(/^I verify remember me checkbox displays$/, function(){
        LoginPage.rememberCheckboxIsVisible();
    });
        
    this.Then(/^I verify remember me label displays$/, function(){
        LoginPage.rememberLabelIsVisible();
    });

    this.Then(/^I verify forgot your password link displays$/, function(){
        LoginPage.forgotPasswordIsVisible();
    });
};