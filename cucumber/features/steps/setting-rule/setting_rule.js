/**
 * Feature: Setting Rule
 * Run script test for Setting Rule page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When } = require('cucumber');
const { By } = require('selenium-webdriver');
const sleep = require('sleep');
const Utils = require('../../support/utils');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;


// Path name
const PATH_EMAIL_RULES = '/admin/settings/emailRules';

let utils = new Utils();

When('Visit Setting Rule page', async function () {
    await this.driver.get(utils.getHome(PATH_EMAIL_RULES));
    sleep.sleep(3);
});

And('Click Add new button', async function () {
    await this.driver.findElement(By.xpath(`//button[@class="ant-btn ant-btn-dashed"]`)).click();
});

And('Enter Rule information', async function (dataTable) {
    // Get data from dataTable
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id(`selectteam`)).click();
    await this.driver.findElement(By.xpath(`//li[text()='${data[0].team}']`)).click(); 

    await this.driver.findElement(By.id(`conditionname`)).sendKeys(data[0].name);

    await this.driver.findElement(By.id(`conditionLogicType`)).click();
    await this.driver.findElement(By.xpath(`//div[text()='${data[0].content}']`)).click();
    
   await this.driver.findElement(By.id(`inputcondition[1]`)).sendKeys(data[3].content);
    
   // target folder
   await this.driver.findElement(By.xpath(`//div[@class="ant-row ant-form-item antd-pro-pages-admin-setting-non-auto-reply-rule-add-modal-folderRequired"]//button`)).click();
   sleep.sleep(2);
   await this.driver.findElement(By.xpath(`//div[div[span[label[text()="${data[6].team}"]]]]/div[@class="rst__rowToolbar"]/div/button`)).click();
   
   await this.driver.findElement(By.xpath(`//div[div[div[text()="Please select a assignee"]]]`)).click();
    

    sleep.sleep(5);
    
});

// And('Click icon save signature', async function () {
//     sleep.sleep(3);
//     await this.driver.findElement(By.xpath(`//div[@class="antd-pro-pages-admin-team-signature-antCard"]/div/button[@class="ant-btn ant-btn-primary"]`)).click();;
// });

// Then Show message "Add new signature successfully!"