'use strict';

module.exports = {

    headerPage: {
      usernameLabel: 	'.profile-card-name .profile-link-label',
      userProfileImage: '.oneUserProfileCardTrigger .tooltipTrigger .profileTrigger'
  	},

    getUsername: function(){
    	var hp = this.headerPage;
    	
    	browser.waitForExist(hp.userProfileImage,20000);
    	browser.click(hp.userProfileImage);
    	browser.waitForExist(hp.usernameLabel,20000)
    	return browser.getText(hp.usernameLabel);
    }
    
};