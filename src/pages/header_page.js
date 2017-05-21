'use strict';

class HeaderPage {

    get usernameLabel()  { return browser.element('.profile-card-name .profile-link-label'); }
    get userProfileImage()  { return browser.element('.oneUserProfileCardTrigger .tooltipTrigger .profileTrigger'); }

    getUsername(done) {
      this.userProfileImage.waitForExist(30000);
      this.userProfileImage.click();

      this.usernameLabel.waitForExist(30000);
      return this.usernameLabel.getText();

      done();
    }

}

module.exports = new HeaderPage();