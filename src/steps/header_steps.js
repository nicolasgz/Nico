var HeaderPage = require('../pages/header_page.js');

module.exports = function() {

	this.Then(/^I expect logged user is "([^"]*)"$/, function(expectedName) {
		var username = HeaderPage.getUsername();

		expect(username).to
	            .equal(expectedName, `Expected that ${username} to be equal to ${expectedName}.`);
	});
};