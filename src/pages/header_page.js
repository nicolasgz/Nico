'use strict';
var Utils = require('../pages/utils_page.js');

class HeaderPage {

    get usernameLabel()  	{ return browser.element('.profile-card-name .profile-link-label'); }
    get userProfileImage()  { return browser.element('.oneUserProfileCardTrigger .tooltipTrigger .profileTrigger'); }
  	get searchInput() 		{return browser.element('value');}
  	get homeTitle() 		{return browser.element('[href="#/home"]');}
  	get forecastsTitle() 	{return browser.element('.slds-context-bar__label-action .slds-truncate [role=presentation]');}
  	get allTabs() 			{return browser.elements('[role="navigation"] a.slds-context-bar__label-action span');}
    get moreOptions()   {return browser.elements('.overflowList .uiMenuItem');}
    get moreLabel()     {return browser.element('.moreLabel');}

    getUsername() {
      this.userProfileImage.waitForExist(30000);
      this.userProfileImage.click();

      this.usernameLabel.waitForExist(30000);
      return this.usernameLabel.getText();

    }

  	clickOnTabWithTitle(title){
      var tabVisible = Utils.clickOnElementWithTitleBySelector('[role="navigation"] a.slds-context-bar__label-action span', title);

      if (!tabVisible) {
        this.moreLabel.waitForExist();
        this.moreLabel.click();
        Utils.clickOnElementWithTitle(this.moreOptions, title);
      }

  	}

}

module.exports = new HeaderPage();