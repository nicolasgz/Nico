var Header = require('../pages/header_page.js');
var expect = require('chai').expect;

module.exports = function() {
  
	this.Then(/^I expect logged user is "([^"]*)"$/, function(expectedName) {
		var username = Header.getUsername();

		expect(username).to
	            .equal(expectedName, `Expected that ${username} to be equal to ${expectedName}.`);
	});
};