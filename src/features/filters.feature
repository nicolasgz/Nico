Feature: Filters

Scenario Outline: Filter by 'Neighbourhood' and 'Price'

	Given I open the url "https://yelp.com/"
	When I set the searchInput to "Restaurants"
 	When I append "Pizza" next to text within search bar
	And I click Search button, from Search Results Page
  	When I click All Filters button, from Filters Page
	And I filter by "<Neighbourhood>", at Neighbourhoods section
	And I filter by "<Price>", at Price section
	Then I get results


	Examples: 

	|Neighbourhood|Price|
	|Financial_District|2.1|