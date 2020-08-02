Feature: Setting Rule
    Background:
        Given Login with user role: LEADER
        | username | password     |
        | AutoTest | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Add new rule
        When Visit Setting Rule page
        And Click Add new button
        And Enter Rule information
        | team              | name          | content                           |
        | AutoTest Team     | AutoTest Rule | Meet all the following conditions |
        | ----------------- | ------------- | --------------------------------- |
        | item              | condition     | value                             |
        | subject           | contains      | AutoTest                          |
#        | from              | contains      | thuongln@nal.vn                   |
#        | to                | contains      | taylq@nal.vn                      |
        | ----------------- | ------------- | --------------------------------- |
        | folder            | assignee      |                                   |
        | AutoTest1 Folder  | AutoTest      |                                   |

        And Click icon save rule
#        Then Show alert with content "Add new signature successfully!"