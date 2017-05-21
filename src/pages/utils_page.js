'use strict';

class UtilsPage {

    goTo(site){
        browser.url(site);
        browser.setViewportSize({
            width: 2500,
            height: 1440,
        })
    }

    getUrl() {
      return browser.getUrl();
    }

}

module.exports = new UtilsPage();