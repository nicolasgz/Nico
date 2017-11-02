'use strict';

var UtilsPage = require('../pages/utilsPage.js');
var CommonPage = require('../pages/common.js');

class SearchResultsPage {


    get searchButton()                 { return browser.element('#header-search-submit'); }
    get searchInput()                  { return browser.element('#find_desc'); }
    get searchResultsLabel()           { return browser.element('.search-header-title-container>h1'); }
    get lblPaginationResults()         { return browser.element('.pagination-results-window'); }
    get addSenseWrapper()              { return browser.element('.adsense-wrapper'); }
    get listOfNonAdvertisedStars()     { return browser.elements('.search-results-content li.regular-search-result .biz-rating div');}
    get listOfNonAdvertisedResults()   { return browser.elements('.search-results-content li.regular-search-result a[class*=biz-name]');}
    get listOfSearchResults()          { return browser.elements('.search-results-content');}

    getSearchResultsLabel(){
        
        this.searchResultsLabel.waitForVisible();
        return this.searchResultsLabel.getText();

    }

    clickSearchButton(button){ 
        
        this.searchButton.waitForVisible();
        this.searchButton.click();
        CommonPage.waitForYelpLoadingIconToDisappear();

    }
    
    getSearchInputText(){
        
        this.searchInput.waitForVisible();
        return this.searchInput.getValue();

    }

    setSearchInput(text){
        
        this.searchInput.waitForVisible();
        this.searchInput.click();
        this.searchInput.setValue(text);        

    }

    isSearchResultsVisible(){

        return this.listOfSearchResults.isVisible();

    }

    getNonAdvertisedResults(){
        
        console.log(`\n Your search, in current page, returned: ${this.listOfNonAdvertisedResults.value.length} record(s).`);        
    
    }

    getResultsAcrossPages(){
    
        var strLblPaginationResults = this.lblPaginationResults.getText().split(" ");
        console.log(`\n Your search, across all pages, returned: ${strLblPaginationResults[3]} record(s).`);
    
    }

    showStarRaitingSearchResults(){
    
        var listOfStars = this.listOfNonAdvertisedStars;

        for (var i = 0; i < listOfStars.value.length; i++) {
    
            var strCurrentNumberOfStars = listOfStars.value[i].getAttribute('title').split(" ");
            console.log(`\n Star rating for record number ${i+1} is: ${strCurrentNumberOfStars[0]}`);
    
        }

}

    clickNonAdvertisedRecordNumber(index){
       
        this.listOfNonAdvertisedResults.value[index].click();
                            
    }
}
module.exports = new SearchResultsPage();