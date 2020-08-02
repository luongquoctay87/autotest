Feature: Teams
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page
        
    Scenario: Add new team
        When Visit Team List page
        And Click add new button
        And Enter Team information
        | team_name     | mail_list_name     | description           |
        | AutoTest Team | AutoTest Mail List | This is AutoTest Team |
        And Click save team button
        Then Show alert with content "Successfully created!"

    Scenario: Add new member
        When Visit Team List page
        And Click icon add member of "AutoTest Team"
        And Click Add member button
        And Click add member "AutoTest"
        Then Show alert with content "Successfully added!"

#    Scenario: Delete Team
#        When Visit Team List page
#        And Click icon delete team "AutoTest Team"
#        And Confirm delete Team
#        Then Show message "Successfully deleted !"
