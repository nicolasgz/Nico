var HomePage = require('../pages/homePage.js');
var SearchResultsPage = require('../pages/searchResultsPage.js');
var FiltersPage = require('../pages/filtersPage.js');

module.exports = function() {

    this.When(/^I set the searchInput to "([^"]*)"$/, function(searchOption) {
        HomePage.setSearchInput(searchOption);
    });

    this.When(/^I append "([^"]*)" next to text within search bar$/, function(wordToBeAppended) {
        
      var textWithAppendedWord = SearchResultsPage.getSearchInputText().concat(` ${wordToBeAppended}`);
      SearchResultsPage.setSearchInput(textWithAppendedWord);
  
    });

    this.When(/^I click Search button, from Search Results Page$/, function() {

       SearchResultsPage.clickSearchButton();
    
    });

    this.When(/^I click All Filters button, from Filters Page$/, function() {

       FiltersPage.clickButton(button);
    
    });

    this.Then(/^I get results$/, function() {
      
       console.log('\n******** Search results information for non-advertised records ********');

       SearchResultsPage.getNonAdvertisedResults();
       SearchResultsPage.getResultsAcrossPages();

       console.log('\n************************************************************************\n');

       expect(SearchResultsPage.isSearchResultsVisible()).to.be.true;

    });

    this.When(/^I show star raiting for each search result record$/, function() {
        
        SearchResultsPage.showStarRaitingSearchResults();
  
    });


    this.Then(/^"([^"]*)" option is contained in label search-header-title, from Search_Results_Page$/, function(searchOption) {
  
        var searchResultsLabel = SearchResultsPage.getSearchResultsLabel();
        console.log(searchResultsLabel);
        expect(searchResultsLabel).to.include(searchOption, `'${searchOption}' is not contained in label 'search-header-title' from Search_Results_Page`);
  
    });

    this.When(/^I click first non-advertised record$/, function() {
        
        SearchResultsPage.clickNonAdvertisedRecordNumber(0);

    });

};