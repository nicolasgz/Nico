Feature: Salesforce Header
As a User of Salesforce
I want to be able to access the page Header
So that I can access all the tabs in the page

	Background: Perform Succesful Login in Salesforce
		Given I open the url "https://login.salesforce.com/"
		When I set the username "danilotrainingde@oktana.com" and password "Password123"
		And I click login button
		And I pause for 2000ms

	Scenario: Select All Tabs in Header
		Given I click on each tab and verify is displayed
			|tab_name 		|
			# |Home			|
			# |Chatter 		|
			# |Opportunities	|
			# |Leads			|
			# |Tasks			|		
			# |Files			|
			# |Accounts		|
			# |Contacts 		|
			# |Campaigns 		|
			# |Dashboards 	|
			# |Reports 		|
			# |Chatter		|
			# |Groups			|
			# |Calendar		|
			# |People			|
			|Cases			|	
			# |Forecasts		|	