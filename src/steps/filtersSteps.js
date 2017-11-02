var FiltersPage = require('../pages/filtersPage.js');

module.exports = function() {

    this.When(/^I filter by "([^"]*)", at Neighbourhoods section$/, function(neighbourhoodOption) {
       
		FiltersPage.clickNeighbourhoodCheckbox(neighbourhoodOption);

        });

    this.When(/^I filter by "([^"]*)", at Price section$/, function(priceOption) {
       
		FiltersPage.clickPriceCheckbox(priceOption);

        });
};