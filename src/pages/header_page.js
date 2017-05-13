'use strict';

module.exports = {

    headerPage: {
      usernameLabel: 	'.profile-card-name .profile-link-label',
      userProfileImage: '.oneUserProfileCardTrigger .tooltipTrigger .profileTrigger'
  	},

    getUsername: function(done){
    	var hp = this.headerPage;

    	browser.waitForExist(hp.userProfileImage,30000);
    	browser.click(hp.userProfileImage);

    	browser.waitForExist(hp.usernameLabel,30000);
    	browser.waitForVisible(hp.usernameLabel,30000);
    	
    	return browser.getText(hp.usernameLabel);
    	done();
    }
    
};