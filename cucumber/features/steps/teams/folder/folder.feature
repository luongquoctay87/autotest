Feature: Email Folder
    Background:
        Given Login with user role: LEADER
        | username | password     |
        | AutoTest | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Add new folder
        When Visit Team List page
        And Click icon folder of team "AutoTest Team"
        And Click icon add new at folder "AutoTest Service Name"
        And Enter folder name "AutoTest1 Folder"
        And Click icon save folder
        Then Show alert with content "Successfully created !"
        