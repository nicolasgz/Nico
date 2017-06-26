var ExamplesPage = require('../pages/examples_page.js');

module.exports = function() {

    this.When(/^I go to the link "([^"]*)"$/, function(href) {
        ExamplesPage.clickLink(href);
    });
};