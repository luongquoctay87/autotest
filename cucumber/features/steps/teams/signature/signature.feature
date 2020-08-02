Feature: Email Signature
    Background:
        Given Login with user role: LEADER
        | username | password     |
        | AutoTest | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Add new signature
        When Visit Team List page
        And Click icon signature of team "AutoTest Team"
        And Click button Add signature
        And Enter signature information
        | description              | content                    |
        | AutoTest Signature Title | AutoTest Signature Content |
        And Click icon save signature
#        Then Show alert with content "Add new signature successfully!"
        