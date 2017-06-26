var TablesPage = require('../pages/tables_page.js');

module.exports = function() {

    this.When(/^I sort by "([^"]*)" at table "([^"]*)"$/, function(column, table) {
    	TablesPage.clickColumnAtTable(column, table);
    });

    this.Then(/^The sort at "([^"]*)" is:$/, function(table_name, table_values) {
    	var hashes = table_values.hashes();
    	var isSorted = TablesPage.verifySort(table_name, hashes);
    	expect(isSorted).to.equal(true, 'Table is not sorted!');
    });
};