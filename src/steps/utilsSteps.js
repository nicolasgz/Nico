	var UtilsPage = require('../pages/utilsPage.js');

module.exports = function() {

	this.Given(/^I open the url "([^"]*)"$/, function(site) {
		UtilsPage.goTo(site);
	});
};