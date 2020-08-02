Feature: Mail Server
    Background:
        Given Login with user role: SYSTEM
        | username | password     |
        | system   | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Add New Mail Server
        When Visit to Mail Server page
        And Click add new mail server button
        And Enter Mail Server information
        | mail_server_name | name        | port | protocol |
        | AutoTest Server  | kwmc.nal.vn | 993  | IMAP     |
        | ________________ | kwmc.nal.vn | 25   | SSL      |
        And Click Save Mail Server
        Then Show message "Add Mail Server successfully"

#    Scenario: Delete Mail Server
#        When Visit to Mail Server page
#        And Click icon delete of "AutoTest Server"
#        And Confirm delete Mail Server
#        Then Show message "Delete Mail Server successfully"