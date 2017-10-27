var HomePage = require('../pages/home_page.js');
var SearchResultsPage = require('../pages/search_results_page.js');
var FiltersPage = require('../pages/filters_page.js');

module.exports = function() {

    this.When(/^I set the searchInput to "([^"]*)"$/, function(searchOption) {
        HomePage.setSearchInput(searchOption);
    });

    this.When(/^I append "([^"]*)" next to text within search bar$/, function(wordToBeAppended) {
        
        var textWithAppendedWord = SearchResultsPage.getSearchInputText().concat(` ${wordToBeAppended}`);
        SearchResultsPage.setSearchInput(textWithAppendedWord);
    
    });

      this.When(/^I click "([^"]*)" button, from "([^"]*)"$/, function(button, page) {

         switch(page){

          case "Search Results Page": SearchResultsPage.clickButton(button);
          break;

          case "Filters Page": FiltersPage.clickButton(button);
          break;
         }
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