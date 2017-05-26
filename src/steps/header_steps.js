var Header = require('../pages/header_page.js');
var Utils = require('../pages/utils_page.js');
var Leads = require('../pages/leads_page.js');
var Cases = require('../pages/cases_page.js');
var Opportunities = require('../pages/opportunities_page.js');
var Tasks = require('../pages/tasks_page.js');
var Files = require('../pages/files_page.js');
var Accounts = require('../pages/accounts_page.js');
var Contacts = require('../pages/contacts_page.js');
var Campaigns = require('../pages/campaigns_page.js');
var Dashboards = require('../pages/dashboards_page.js');
var Reports = require('../pages/reports_page.js');
var Groups = require('../pages/groups_page.js');
var Calendar = require('../pages/calendar_page.js');
var People = require('../pages/people_page.js');

module.exports = function() {

	this.Then(/^I expect logged user is "([^"]*)"$/, function(expectedName) {
		var username = Header.getUsername();

		expect(username).to
	            .equal(expectedName, `Expected that ${username} to be equal to ${expectedName}.`);
	});

	this.Then(/^I click on all tabs$/, function(data){
		var titles = data.raw();
		titles.forEach(function(title){
			Header.clickOnTabWithTitle(title);
		})
	});

	this.Then(/^I click on each tab and verify is displayed$/, function(data){
		var titles = data.hashes();
		titles.forEach(function(a_title){
			var tab_title = a_title['tab_name']
			console.log (a_title);
			Header.clickOnTabWithTitle(tab_title);

			switch(tab_title) {
				case 'Cases':
				    expect(Cases.isCasesLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
				    browser.pause(2000);
					break;

				case 'Files':
				    expect(Files.isFilesLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
				    browser.pause(2000);
					break;

				case 'Opportunities':
				    expect(Opportunities.isOpportunitiesLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
				    browser.pause(2000);
					break;
				
				case 'Leads':
				    expect(Leads.isLeadsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Tasks':
				    expect(Tasks.isTasksLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;
				
				case 'Accounts':
				    expect(Accounts.isAccountsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Contacts':
				    expect(Contacts.isContactsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Campaigns':
				    expect(Campaigns.isCampaignsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Dashboards':
				    expect(Dashboards.isDashboardsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;


				case 'Reports':
				    expect(Reports.isReportsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Groups':
				    expect(Groups.isGroupsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'Calendar':
				    expect(Calendar.isCalendarLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				case 'People':
				    expect(People.isPeopleLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					browser.pause(2000);
					break;

				default:
					console.log('default...')
			}
			
		});
	});
};