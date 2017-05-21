Feature: Salesforce Login
    As a User of Salesforce
    I want to be able to perform a login
    So that I can access my user page

    Scenario: Login elements present
        Given I open the url "https://login.salesforce.com/"
        Then I verify Logo displays
        And I verify username label displays
        And I verify password label displays
        And I verify username input displays
        And I verify password input displays
        And I verify login button displays
        And I verify remember me checkbox displays
        And I verify remember me label displays
        And I verify forgot your password link displays

    Scenario: Login with incorrect username and incorrect password
        Given I open the url "https://login.salesforce.com/"
        When I set the username "invalidUsername" and password "invalidPassword"
        And I click login button
        Then I verify error message "Please check your username and password. If you still can't log in, contact your Salesforce administrator." displays

    Scenario: Login with blank password
        Given I open the url "https://login.salesforce.com/"
        When I set the username "invalidUsername" and password ""
        And I click login button
        Then I verify error message "Please enter your password." displays

    Scenario: Login with blank username
        Given I open the url "https://login.salesforce.com/"
        When I set the username "" and password "Salesforce1"
        And I click login button
        Then Login page is displayed: "true"

    Scenario: Login with correct username and incorrect password
        Given I open the url "https://login.salesforce.com/"
        When I set the username "testingtrainingjs@oktana.io" and password "invalidPassword"
        And I click login button
        Then I verify error message "Please check your username and password. If you still can't log in, contact your Salesforce administrator." displays

    Scenario: Login with incorrect username and correct password
        Given I open the url "https://login.salesforce.com/"
        When I set the username "invalidUsername" and password "Password123"
        And I click login button
        Then I verify error message "Please check your username and password. If you still can't log in, contact your Salesforce administrator." displays

    Scenario: Perform Succesful Login in Salesforce
        Given I open the url "https://login.salesforce.com/"
        When I set the username "testingtrainingjs@oktana.io" and password "Salesforce1"
        And I click login button
        Then I expect logged user is "oktana testing"

    Scenario: Forgot Password link
        Given I open the url "https://login.salesforce.com/"
        When I click the forgot your password button
        Then Forgot your password page is displayed: "true"