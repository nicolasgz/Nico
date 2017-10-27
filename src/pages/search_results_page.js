'use strict';

var UtilsPage = require('../pages/utils_page.js');
var CommonPage = require('../pages/common.js');

class SearchResultsPage {


//Attributes 

    get searchButton()                     { return browser.element('#header-search-submit'); }
    get searchInput()                      { return browser.element('#find_desc'); }
    get searchResultsLabel()               { return browser.element('.search-header-title-container>h1'); }
    get lblPaginationResults()             { return browser.element('.pagination-results-window'); }
    get addSenseWrapper()                  { return browser.element('.adsense-wrapper'); }
    
    get listOfNonAdvertisedResults()       { return '.search-results-content li.regular-search-result a[class*=biz-name]';}
    get listOfSearchResults()              { return '.search-results-content';}
    get listOfNonAdvertisedStars()         { return browser.elements('.search-results-content li.regular-search-result .biz-rating div');}


//Methods 

    getSearchResultsLabel(){
        this.searchResultsLabel.waitForVisible();
        return this.searchResultsLabel.getText();

    }

    clickButton(button){ 
             switch(button){
                case "Search": {
                    this.searchButton.waitForVisible();
                    this.searchButton.click();
                    CommonPage.waitForYelpLoadingIconToDisappear();
                }
                break;
            }
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
        var listOfSearchResults =  browser.elements('.search-results-content');
        return listOfSearchResults.isVisible();
    }

    getNonAdvertisedResults(){
        var searchResultsLength = browser.elements(this.listOfNonAdvertisedResults).value.length;
        console.log(`\n Your search, in current page, returned: ${searchResultsLength} record(s).`);        
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
    //Precondition: index is within index rage of listOfNonAdvertisedResults
    clickNonAdvertisedRecordNumber(index){
        var lstNonAdvertisedSearchResults = browser.elements(this.listOfNonAdvertisedResults);
        var exit = false ;
        var i = 0;

        while(!exit && i<lstNonAdvertisedSearchResults.value.length ){
            if(i==index){
                lstNonAdvertisedSearchResults.value[i].click();
                exit = true ;
            }

            i++;

        }

    }
}

module.exports = new SearchResultsPage();