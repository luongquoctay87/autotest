Feature: Set Up Fetch Email
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Create New Mail Server
        When Visit to Mail Server page
        And Click add new mail server button
        And Enter Mail Server information
        | mail_server_name  | name        | port | protocol |
        | AutoTest Server 1 | kwmc.nal.vn | 993  | IMAP     |
        | _________________ | kwmc.nal.vn | 25   | SSL      |
        And Click Save Mail Server

    Scenario: Create New User
        When Visit to Add New User page
        And Enter User information with email
        | username  | first_name | last_name | password     | role | email                 | email_password | mail_server_name  |
        | AutoTest1 |  Auto     | Test      | naltest12345 | USER | autotest1@kwmc.nal.vn | naltest12345   | AutoTest Server 1 |
        And Click Save User
        Then Show alert with content "Add new user successfully!"        

    Scenario: Create New Mail List
        When Visit Setting mail list page
        And Click add new mail list button
        And Enter a mail list information
        | mail_list_name       | mail_server_name  |
        | AutoTest Mail List 1 | AutoTest Server 1 |
        And Click save mail list
        And Show popup with message "Successfully added!"
        And Click OK button
        And Click mail list name "AutoTest Mail List 1"
        And Click add project button
        And Enter project information
        | project_name      | email_group           | type  |
        | AutoTest1 Project | autotest1@project.com | ALERT |
        And Click save project button
        And Show project popup with message "Add new project successfully!"
        And Confirm OK button
        And Click add mail account button
        And Enter mail account information
        | email                 | password     | mail_server_name  |
        | Tester07097@gmail.com | Tester123456 | AutoTest Server 1 |
        And Click save mail account button
        And Show popup with message "Successfully added!"
        Then Visit Setting mail list page

    Scenario: Create New Team
        When Visit Team List page
        And Click add new button
        And Enter Team information
        | team_name       | mail_list_name       | description             |
        | AutoTest Team 1 | AutoTest Mail List 1 | This is AutoTest Team 1 |
        And Click save team button
        Then Show alert with content "Successfully created!"      

    Scenario: Add New Member To Team
        When Visit Team List page
        And Click icon add member of "AutoTest Team 1"
        And Click Add member button
        And Click add member "AutoTest1"
        And Confirm OK button
