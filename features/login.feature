Feature: Login action

    Scenario: Login with valid credentials
        Given I open the login page
        When I fill login form with valid credentials
        Then I should see the inventory page
