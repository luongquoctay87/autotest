### Automation Testing 

## Summary
Automation Testing Tool is integrated Cucumber Testing Framework and Selenium Framework run on Node.js Platform

### Quick Start
    1. Clone the project using ``
    2. cd automation-testing/
    3. Install node modules - `npm install`.
    4. cp environment-sample.env .env (make sure the port:8000 as same as port:8000)
    5. Start demo app using `npm test`.
    6. To run tests - `npm test`.
    7. To generate html report - `npm run report`


## Setup
Install Dependencies at folder "automation-testing"
    - Install Node modules
        $ npm install
    - Update Chrome Driver
        $ npm install chromedriver --chromedriver_version=LATEST
    
    - Install ChromeDriver with
        $ brew cask install chromedriver
    - To re-install chromedriver, run:
        $ brew cask reinstall chromedriver

## Run Test
Run Cucumber at folder "automation-testing"
    
    - Run all scenarios
        $ npm run test

    - Run specific feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/login/login.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/mail-server/mail_server.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/users/user.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/setting-mail-list/setting_mail_list.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/teams/teams.feature        
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/setting/setting_fetch_mail.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/setting/delete_setting_fetch_mail.feature

        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/setting-project/setting_project.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/teams/folder/folder.feature
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/teams/signature/signature.feature

        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/setting-rule/setting_rule.feature
        
    - Run specific scenario
        $ ./node_modules/.bin/cucumber-js cucumber/features/steps/users/users.feature 5

### Fix Bug: chromedriver --> App cannot verified
    
    $ cd /usr/local/Caskroom/chromedriver/80.0.3987.106 
    $ xattr -d com.apple.quarantine chromedriver

## Run Report
    
    Generate Multiple Report
    $ npm run report
