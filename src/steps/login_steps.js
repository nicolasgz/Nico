var LoginPage = require('../pages/login_page.js');
var expect = require('chai').expect;

module.exports = function() {

	this.When(/^I set the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
	    LoginPage.setData(name, pass);
	});

	this.When(/^I click the login button$/, function() {
	    LoginPage.clickLoginButton();
	});

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
};