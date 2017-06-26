var LoggedInPage = require('../pages/logged_in_page.js');

module.exports = function() {

    this.When(/^Logged in message is displayed "([^"]*)"$/, function(message) {
    	var logged_in_label = LoggedInPage.getLoggedInLabel();
    	expect(logged_in_label).to.include(message, `Current logged in message: '${logged_in_label}' but expected message: '${message}'.`);
    });
};