Feature: Setting Mail List
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page
        
    Scenario: Add new Mail List
        When Visit Setting mail list page
        And Click add new mail list button
        And Enter a mail list information
        | mail_list_name     | mail_server_name |
        | AutoTest Mail List | AutoTest Server  |
        And Click save mail list
        And Show popup with message "Successfully added!"
        And Click OK button
        And Click mail list name "AutoTest Mail List"
        And Click add project button
        And Enter project information
        | project_name     | email_group          | type  |
        | AutoTest Project | autotest@project.com | ALERT |
        And Click save project button
        And Show project popup with message "Add new project successfully!"
        And Confirm OK button
        And Click add mail account button
        And Enter mail account information
        | email                | password | mail_server_name |
        | autotest@kwmc.nal.vn | 12345678 | AutoTest Server  |
        And Click save mail account button
        And Show popup with message "Successfully added!"
        Then Visit Setting mail list page

#    Scenario: Delete Mail List
#        When Visit Setting mail list page
#        And Click icon delete at mail list name "AutoTest Mail List"
#        And Confirm delete mail list
#        And Confirm things will be deleted in this mail list
#        And Click delete things
#        Then Show alert delete mail list "Successfully deleted!"
