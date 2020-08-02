Feature: User
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Add new user without email
        When Visit to Add New User page
        And Enter User information without email
        | username | first_name | last_name  | password     | role |
        | JohnDoe  | John      |  Doe       | naltest12345 | USER |
        And Click Save User
        Then Show alert with content "Add new user successfully!"

    Scenario: Add new user with email
        When Visit to Add New User page
        And Enter User information with email
        | username | first_name | last_name | password     | role   | email                | email_password | mail_server_name |
        | AutoTest |  Auto     | Test      | naltest12345 | LEADER | autotest@kwmc.nal.vn | naltest12345   | AutoTest Server  |
        And Click Save User
        Then Show alert with content "Add new user successfully!"

    Scenario: Add new user unsuccessful
        When Visit to Add New User page
        And Enter User information with account exist
        | username | first_name | last_name | password     | role | email                | email_password | mail_server_name |
        | AutoTest |  Auto     | Test      | naltest12345 | USER | autotest@kwmc.nal.vn | naltest12345   | AutoTest Server  |
        And Click Save User
        Then Show alert with content "User name or email address has been existed in the system!"

#    Scenario: Delete user
#        When Visit to User page
#        And Click icon delete at username "AutoTest"
#        And Confirm delete user
#        Then Show alert with content "Delete user successfully!"
