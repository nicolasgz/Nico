
var PlaceDetailsPage = require('../pages/placeDetailsPage.js');

module.exports = function() {

    this.Then(/^I get into customer details page$/, function() {

    	PlaceDetailsPage.waitForPageToLoad();

    });

	this.Then(/^I report critical information on console$/, function() {   

		console.log('******** Basic information about the place to visit ********');

        PlaceDetailsPage.reportInConsoleAddress();
        PlaceDetailsPage.reportInConsolePhoneNumber();
        PlaceDetailsPage.reportInConsoleWebDetails();

		console.log('******** First three non-advertised reviews are: ********\n');

        PlaceDetailsPage.reportInConsoleHighLightsReviews();

        console.log('***************************************************************\n');

    });

};









