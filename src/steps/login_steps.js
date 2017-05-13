var LoginPage = require('../pages/login_page.js');
// var LoginPage = require('../../features/pages/login_page.js');

module.exports = function() {

	this.When(/^I set the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
	    LoginPage.setData(name, pass);
	});
};