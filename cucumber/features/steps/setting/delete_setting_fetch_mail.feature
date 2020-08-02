Feature: Teams
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Delete Team
        When Visit Team List page
        And Click icon delete team "AutoTest Team 1"
        And Confirm delete Team
        Then Show message "Successfully deleted !"

   Scenario: Delete User
       When Visit to User page
       And Click icon delete at username "AutoTest1"
       And Confirm delete user
       Then Show alert with content "Delete user successfully!"

    Scenario: Delete Mail List
        When Visit Setting mail list page
        And Click icon delete at mail list name "AutoTest Mail List 1"
        And Confirm delete mail list
        And Confirm things will be deleted in this mail list
        And Click delete things
        Then Show alert delete mail list "Successfully deleted!"

    Scenario: Delete Mail Server
        When Visit to Mail Server page
        And Click icon delete of "AutoTest Server 1"
        And Confirm delete Mail Server
        Then Show message "Delete Mail Server successfully"
