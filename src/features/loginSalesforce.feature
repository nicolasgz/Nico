Feature:
    Login into salesforce

    Scenario: Login into salesfoce succesfully into salesfoce
        Given I open salesforce login page
        When I set user "user1" and password "password"
        And I click the login button
        Then I expect that im in the home page