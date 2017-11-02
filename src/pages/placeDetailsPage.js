'use strict';

class PlaceDetails{
	

	get address() 	          { return browser.element('.street-address>address');}
	get phoneNumber()         { return browser.element('.biz-phone');}
	get webSite() 		      { return browser.element('.biz-website.js-add-url-tagging>a');}
	get listCustomerReviews() { return browser.elements('.review-highlights-list p[class=quote]');}

	
	get reviewsHighLights()   { return '.review-highlights-list';}

	waitForPageToLoad(){
		browser.waitForExist(this.reviewsHighLights,500);
	}

	reportInConsoleAddress(){
		console.log(`\n Address:\n ${this.address.getText()}`);
	}

	reportInConsolePhoneNumber(){
		console.log(`\n Phone number:\n ${this.phoneNumber.getText()}`);
	}

	reportInConsoleWebDetails(){
		console.log(`\n Website info:\n ${this.webSite.getText()}\n`);
	}

	reportInConsoleHighLightsReviews(){

		for (var i = 0; i < this.listCustomerReviews.value.length ; i++) {
			console.log(`${this.listCustomerReviews.value[i].getText()}\n`);
		}
	}
}
module.exports = new PlaceDetails();