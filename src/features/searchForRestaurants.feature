Feature: Search for Restaurants

Scenario: Append "Pizza" next to "Restaurants" in search input from Search Results page, and click search button.

	Given I open the url "https://yelp.com/"
	When I set the searchInput to "Restaurants"
	When I append "Pizza" next to text within search bar
	And I click Search button, from Search Results Page
	Then I get results