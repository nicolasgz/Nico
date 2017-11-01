'use strict';


var CommonPage = require('../pages/common.js');

class FiltersPage{


	get btnAllFilters()     {return browser.element('.filter-label.filters-toggle.js-all-filters-toggle.show-tooltip');}
	
	
	filterPanel() 		{return '.filter-panel_filters[style*=\'display: block\']'; }


	neighborhoodCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='place']`;}


 	priceCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='price']`;}
		
	
 	clickNeighbourhoodCheckbox(checkboxName){

 		browser.element(this.neighborhoodCheckboxSelector(checkbox)).click();
 		Common.waitForYelpLoadingIconToDisappear();
 	}


 	clickPriceCheckbox(checkboxName){

 		browser.element(this.priceCheckboxSelector(checkbox)).click();
 		Common.waitForYelpLoadingIconToDisappear();
 	}


	clickAllFiltersButton(button){
	
	    this.btnAllFilters.click();
		this.waitForFilterPanelFiltersToExist();
	
	}

	waitForFilterPanelFiltersToExist(){
	
		browser.waitForExist(this.filterPanel);
	
	}

}
module.exports = new FiltersPage();
			