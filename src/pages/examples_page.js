'use strict';

class ExamplesPage {

    clickLink(href){
        browser.element(`a[href='/${href}']`).click();
    }

}

module.exports = new ExamplesPage();