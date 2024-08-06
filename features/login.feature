Feature: Login action

    Scenario: Login with valid credentials
        Given I open the login page
        When I fill login form with valid credentials
        Then I should see the inventory page


        Scenario Outline: Try to login with invalid credentials
            Given I open the login page
            When I fill the login form with "<username>" and "<password>"
            Then I wait for 3 seconds
#            Then I should see the error message "<message>"

            Examples:
                | username | password |
                | fail1    | fail1    |
                | fail2    | fail2    |
                | fail3    | fail3    |
