'use strict';

var UtilsPage = require('../pages/utils_page.js');

class TablesPage {

	get lastNameColumn()  { return browser.element('#table2 .last-name'); }
	get firstNameColumn()  { return browser.element('#table2 .first-name'); }
	get emailColumn()  { return browser.element('#table2 .email'); }
	get duesColumn()  { return browser.element('#table2 .dues'); }
	get webSiteColumn()  { return browser.element('#table2 .web-site'); }
	get table2rows()  { return browser.elements('#table2 tbody tr'); }

	get table1Headers() { return browser.elements('#table1 .header span'); }

    clickColumnAtTable(column, table){
    	if (table == 'Example 1') {
    		this.clickColumnAtTable1(column);
    	}else{
    		this.clickColumnAtTable2(column);
    	}
    }

    clickColumnAtTable1(column){
    	UtilsPage.clickOnElementWithTitle(this.table1Headers, column);
    }

    clickColumnAtTable2(column){
    	switch(column) {
	    case 'Last Name':
	        this.lastNameColumn.click();
	        break;
	    case 'First Name':
	        this.firstNameColumn.click();
	        break;
	    case 'Email':
	        this.emailColumn.click();
	        break;
	    case 'Due':
	        this.duesColumn.click();
	        break;
	    case 'Web Site':
	        this.webSiteColumn.click();
	        break;
	    default:
	        console.log('There is no column: ' + column)
		}
    }

    verifySort(table_name, hashes){
		if (table_name == 'Example 1') {
    		return this.verifySortAtTable1(hashes);
    	}else{
    		return this.verifySortAtTable2(hashes);
    	}
    }

    verifySortAtTable1(hashes){
    	console.log('This is not implemented > verifySortAtTable1(hashes)');
    	return false;
    }

    verifySortAtTable2(hashes){
    	var rows = this.table2rows
    	rows.waitForVisible(5000);

    	for (var i = 0; i < rows.value.length; i++) {
    		var current_last_name = browser.elementIdElement(rows.value[i].ELEMENT,".last-name").getText();
    		var expected_last_name = hashes[i]["last-name"];

    		var last_name = current_last_name == expected_last_name;

    		var current_first_name = browser.elementIdElement(rows.value[i].ELEMENT,".first-name").getText();
    		var expected_first_name = hashes[i]["first-name"];

    		var first_name = current_first_name == expected_first_name;

    		var current_email = browser.elementIdElement(rows.value[i].ELEMENT,".email").getText();
    		var expected_email = hashes[i]["email"];

    		var email = current_email == expected_email;

    		var current_dues = browser.elementIdElement(rows.value[i].ELEMENT,".dues").getText();
    		var expected_dues = hashes[i]["dues"];

    		var dues = current_dues == expected_dues;

    		var current_web_site = browser.elementIdElement(rows.value[i].ELEMENT,".web-site").getText();
    		var expected_web_site = hashes[i]["web-site"];

    		var web_site = current_web_site == expected_web_site;

    		if (!(last_name && first_name && email && dues && web_site)) {
    			console.log(`current_last_name: ${current_last_name} - expected_last_name: ${expected_last_name}`);
    			console.log(`current_first_name: ${current_first_name} - expected_first_name: ${expected_first_name}`);
    			console.log(`current_email: ${current_email} - expected_email: ${expected_email}`);
    			console.log(`current_dues: ${current_dues} - expected_dues: ${expected_dues}`);
    			console.log(`current_web_site: ${current_web_site} - expected_web_site: ${expected_web_site}`);
    			return false;
    		}
    	}

    	return true;
    }

}

module.exports = new TablesPage();