Feature: Customer Details

Scenario: Get into first non-advertised record, and report critical information on console

		Given I open the url "https://yelp.com/"
		When  I set the searchInput to "Restaurants"
		And I get results
		When I click first non-advertised record
		And I get into customer details page
		Then I report critical information on console


