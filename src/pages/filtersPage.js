'use strict';


var Common = require('../pages/common.js');

class FiltersPage{


	get btnAllFilters()     {return browser.element('.filter-label.filters-toggle.js-all-filters-toggle.show-tooltip');}
	
	
	filterPanel() 		{return '.filter-panel_filters[style*=\'display: block\']'; }


	neighborhoodCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='place']`;}


 	priceCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='price']`;}
		
	
 	clickNeighbourhoodCheckbox(checkboxName){

 		browser.element(this.neighborhoodCheckboxSelector(checkboxName)).click();
 		Common.waitForYelpLoadingIconToDisappear();
 	}


 	clickPriceCheckbox(checkboxName){

 		browser.element(this.priceCheckboxSelector(checkboxName)).click();
 		Common.waitForYelpLoadingIconToDisappear();
 	}


	clickAllFiltersButton(){
	
	    this.btnAllFilters.click();
		this.waitForFilterPanelFiltersToExist();
	
	}

	waitForFilterPanelFiltersToExist(){
	
		browser.waitForExist(this.filterPanel());
	
	}

}
module.exports = new FiltersPage();
			