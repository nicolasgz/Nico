Feature: Filters

Scenario Outline: Filter by 'Neighbourhood' and 'Price'
		Given I open the url "https://yelp.com/"
		When I set the searchInput to "Restaurants"
		And I append "Pizza" next to text within search bar
		And I click "Search" button, from "Search Results Page"
		And I click "All Filters" button, from "Filters Page"
		And I filter by "<Neighbourhood>", at "Neighbourhoods" section
		And I filter by "<Price>", at "Price" section
		And I get results


		Examples:
		| Neighbourhood | Price |
		| Financial_District | 2.1 |

	