var LoginPage = require('../pages/login_page.js');

module.exports = function() {

	this.When(/^I set the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
	    LoginPage.setData(name, pass);
	});

	this.When(/^I click the login button$/, function() {
	    LoginPage.clickLoginButton();
	});

	this.Then(/^I expect the error message visibility is "([^"]*)"$/, function(visibility) {
	    LoginPage.isErrorMessageVisible(visibility);
	});
};