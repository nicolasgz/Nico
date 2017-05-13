Feature:
    Login into salesforce

    Scenario: With a wrong username and password an error message is displayed.
        Given I open the url "https://login.salesforce.com/"
		When I set the username "invalidUsername" and password "invalidPassword"
        And I click the login button
        Then I expect the error message visibility is "true"