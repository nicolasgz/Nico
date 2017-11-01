'use strict';

class HomePage {


    get searchInput()       { return browser.element('#find_desc'); }
    get locationInput()     { return browser.element('#dropperText_Mast'); }
    get searchButton()      { return browser.element("#header-search-submit"); }


    setSearchInput(searchOption){
        this.searchInput.waitForVisible();
        this.searchInput.click();
        browser.element(`[data-suggest-query='${searchOption}']`).click();
    }

    setLocationInput(location){
        this.locationInput.waitForVisible();
        this.locationInput.setValue(location);
    }

    clickSearchButton(){
        this.searchButton.waitForVisible();
        this.searchButton.click();
    }


}
module.exports = new HomePage();
