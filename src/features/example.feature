Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

    Scenario: Check title of website after search
        Given I open the url "https://www.google.com"
        When I set "WebdriverIO" to the inputfield "#lst-ib"
        And I press "Enter"
        And I pause for 6000ms
        Then I expect that the title is "WebdriverIO - Google Search"