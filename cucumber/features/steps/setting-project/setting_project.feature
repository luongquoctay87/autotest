Feature: Setting Project
    Background:
        Given Login with user role: LEADER
        | username | password     |
        | AutoTest | naltest12345 |
        And Click login button
        Then User can see email home page

    Scenario: Setting rules for project
        When Visit to Setting Project page
        And Click to project name "AutoTest Project"
        And Click edit Project button
        And Enter Setting Project rules
        | service                     | service_name          | person_in_charge    |
        |-----------------------------|-----------------------|---------------------|
        | AutoTest Service Group Code | AutoTest Service Name | Person in charge    |
        |-----------------------------|-----------------------|---------------------|
        | Require Keyword             | AutoTest Service Code | 0841234567          |
        |-----------------------------|-----------------------|---------------------|
        | Restrict Keyword            | @kwmc.nal.vn          | person@in.charge    |
        |-----------------------------|-----------------------|---------------------|
        And Click Save Setting Project
        Then Show alert with content "Update successfully !"