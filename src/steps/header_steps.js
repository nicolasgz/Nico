var Header = require('../pages/header_page.js');
var Utils = require('../pages/utils_page.js');
var Leads = require('../pages/leads_page.js');
var Cases = require('../pages/cases_page.js');
var Opportunities = require('../pages/opportunities_page.js');
var Tasks = require('../pages/tasks_page.js');
var Files = require('../pages/files_page.js');

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
					break;

				case 'Files':
				    expect(Files.isFilesLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Opportunities':
				    expect(Opportunities.isOpportunitiesLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;
				
				case 'Leads':
				    expect(Leads.isLeadsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Tasks':
				    expect(Tasks.isTasksLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;
				
				case 'Accounts':
				    expect(Accounts.isAccountsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Contacts':
				    expect(Contacts.isContactsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Campaigns':
				    expect(Campaigns.isCampaignsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Dashboards':
				    expect(Dashboards.isDashboardsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;


				case 'Reports':
				    expect(Reports.isReportsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Groups':
				    expect(Groups.isGroupsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Calendar':
				    expect(Calendar.isCalendarLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'People':
				    expect(People.isPeopleLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				case 'Forecasts':
				    expect(Forecasts.isForecastsLabelPresent()).to
				    .equal(true, `Expected that ${tab_title} is displayed.`);
					break;

				default:
					console.log('default...')
			}
			
		});
	});
};