/**
 * Feature: Email Folder
 * Run script test for Email Folder page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When } = require('cucumber');
const { By } = require('selenium-webdriver');
const Utils = require('../../../support/utils');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;


And('Click icon folder of team {string}', async function (team) {
    // sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//tr[td[text()="${team}"]]/td[4]/div/a/i[@aria-label="icon: folder"]`)).click();
});

And('Click icon add new at folder {string}', async function (service) {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//div[div[span[form[input[@value="${service}"]]]]]/div[@class="rst__rowToolbar"]/div[3]/button`)).click();
});

And('Enter folder name {string}', async function (folder) {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//div[@class="rst__node"]/div[@class="rst__nodeContent"]/div//div[@class="rst__rowLabel"]/span/form/input[@class="ant-input"]`)).sendKeys(folder);
});

And('Click icon save folder', async function () {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//div[@class="rst__node"]/div[@class="rst__nodeContent"]/div//div[@class="rst__rowToolbar"]/div[@class="rst__toolbarButton"]/div/button[@class="ant-btn ant-btn-primary"]`)).click();;
});

// Then Show message "Successfully deleted !"