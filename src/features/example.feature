Feature: Example

	Scenario: login > correct username and password
		Given I open the url "http://the-internet.herokuapp.com/"
		And I go to the link "login"
		When I set the username "tomsmith" and password "SuperSecretPassword!"
		When I click Login button
		Then Logged in message is displayed "You logged into a secure area!"

	Scenario Outline: login > wrong username and/or password
		Given I open the url "http://the-internet.herokuapp.com/"
		And I go to the link "login"
		When I set the username "<username>" and password "<password>"
		And I click Login button
		Then I am not logged in
		And Error message is "<error>"

		Examples:
		|username 		|password 				|error 	|
		| 				| 						|Your username is invalid!|
		|tomsmith 		|						|Your password is invalid!|
		|				|SuperSecretPassword! 	|Your username is invalid!|
		|wrongUsername	|SuperSecretPassword! 	|Your username is invalid!|
		|tomsmith 		|wrongPassword 			|Your password is invalid!|

	Scenario: tables
		Given I open the url "http://the-internet.herokuapp.com/"
		And I go to the link "tables"
		When I sort by "Last Name" at table "Example 2"
		Then The sort at "Example 2" is:
		| last-name | first-name 	| email 				| dues 		| web-site 					|
		| Bach 		| Frank 		| fbach@yahoo.com 		| $51.00 	| http://www.frank.com 		|
		| Conway 	| Tim 			| tconway@earthlink.net | $50.00 	| http://www.timconway.com 	|
		| Doe 		| Jason 		| jdoe@hotmail.com 		| $100.00 	| http://www.jdoe.com 		|
		| Smith 	| John 			| jsmith@gmail.com 		| $50.00 	| http://www.jsmith.com 	|

