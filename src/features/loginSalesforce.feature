Feature:
    Login into salesforce

    Scenario: Login into salesfoce succesfully into salesfoce
        Given I open the url "https://login.salesforce.com/"
		Given I set the username "zaraza" and password "lalala"
		And I pause for 6000ms
        # And I click the login button
        # Then I expect that im in the home page

    # Scenario: Login into salesfoce succesfully into salesfoce
    #     Given I open salesforce login page
    #     When I set user "user1" and password "password"
    #     And I click the login button
    #     Then I expect that im in the home page