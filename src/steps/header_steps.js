var Header = require('../pages/header_page.js');
var Utils = require('../pages/utils_page.js');
var Leads = require('../pages/leads_page.js');
var Cases = require('../pages/cases_page.js');
module.exports = function() {

	this.Then(/^I expect logged user is "([^"]*)"$/, function(expectedName) {
		var username = Header.getUsername();

		expect(username).to
	            .equal(expectedName, `Expected that ${username} to be equal to ${expectedName}.`);
	});

	this.Then(/^I click on all tabs$/, function(data){
		var titles = data.raw();
		titles.forEach(function(title){
			Header.clickOnTabWithTitle(title);
		})
	});

	this.Then(/^I click on each tab and verify is displayed$/, function(data){
		var titles = data.hashes();

		titles.forEach(function(a_title){
			var tab_title = a_title['tab_name']

			Header.clickOnTabWithTitle(tab_title);

			var visible;

			switch(tab_title) {
				case 'Cases':
				    visible = Cases.isCasesLabelPresent();
					break;
				default:
			    	console.log('default..');
			}

			expect(visible).to.equal(true, `Expected that ${tab_title} to be displayed.`);
		});
	});
};