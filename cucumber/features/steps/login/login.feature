Feature: Log In

    Scenario: User login success
        When Login with account's role=SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page
