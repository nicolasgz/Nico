var FiltersPage = require('../pages/filters_page.js');

module.exports = function() {

    this.When(/^I filter by "([^"]*)", at "([^"]*)" section$/, function(filterOption, sectionPage) {
       
		FiltersPage.clickCheckboxAtSection(sectionPage, filterOption);

        });
};