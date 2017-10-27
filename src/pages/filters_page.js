'use strict';


var CommonPage = require('../pages/common.js');

class filters_page{

	//Attributes

		//Buttons	
			get btnAllFilters()     {return browser.element('.filter-label.filters-toggle.js-all-filters-toggle.show-tooltip');}
		//Filter panel
			get filterPanel() 		{return '.filter-panel_filters[style*=\'display: block\']'; }


	//Methods
		//Parametrized selectors:
			//Neighbourhoods
			neighborhoodCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='place']`;}

			//Price
			priceCheckboxSelector(value) {return `.filter-panel_filters .main input[value*='${value}'][name='price']`;}
		
		//Actions
			clickCheckboxAtSection(filtersSectionName, checkbox){
				switch(filtersSectionName){
					
					case "Neighbourhoods":{
						browser.element(this.neighborhoodCheckboxSelector(checkbox)).click();
					}
					break;

					case "Price":{
						browser.element(this.priceCheckboxSelector(checkbox)).click();
					}
					break;
				}
				CommonPage.waitForYelpLoadingIconToDisappear();
			}

			clickButton(button){
				switch(button){

					case "All Filters": {
				         this.btnAllFilters.click();
				         this.waitForFilterPanelFiltersToExist();
				    }
				    break;
				}
			}

			waitForFilterPanelFiltersToExist(){
				browser.waitForExist(this.filterPanel);
			}
}
module.exports = new filters_page();
			