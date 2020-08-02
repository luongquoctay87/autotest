/**
 * Feature: Setting Mail List
 * Run script test for Setting Mail List page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const CONSTANTS = require('../../support/constants');
const Utils = require('../../support/utils');
const sleep = require('sleep');
const chai = require('chai');
const assert = require('assert');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;

// Path name
const PATH_SETTING_MAIL_LIST = '/admin/setting/mailList';

let utils = new Utils();

When('Visit Setting mail list page', async function () {
    // Waiting for load Add New User page
    await this.driver.get(utils.getHome(PATH_SETTING_MAIL_LIST));

    // Waiting for load Mail Server page
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//h3[text()="Mail List"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    sleep.sleep(3);
});

And('Click add new mail list button', async function () {
    await this.driver.findElement(By.className(`ant-btn-dashed`)).click();
});

And('Enter a mail list information', async function (dataTable) {
    await chai.expect(this.driver.wait(until.elementLocated(By.id('name')), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;

    // Get data from dataTable
    let data = dataTable.hashes();
    await this.driver.findElement(By.id('name')).sendKeys(data[0].mail_list_name);
    await this.driver.findElement(By.id(`serverId`)).click();
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//li[text()='${data[0].mail_server_name}']`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//li[text()='${data[0].mail_server_name}']`)).click();
});

And('Click save mail list', async function () {
    await this.driver.findElement(By.className('ant-btn-primary')).click();
});

And('Click OK button', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]//div[@class="ant-modal-confirm-btns"]/button`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body/div[3]//div[@class="ant-modal-confirm-btns"]/button`)).click();
});

And('Click mail list name {string}', async function (mailListName) {
    sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//tr/td[text()="${mailListName}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//tr/td[text()="${mailListName}"]`)).click();
});

/**
 * Process for Setting Mail List Detail page
*/
And('Click add project button', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//div[@class="ant-card-body"]/div[2]//button`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body//div[@class="ant-card-body"]/div[2]//button`)).click();
});

And('Enter project information', async function (dataTable) {
    await chai.expect(this.driver.wait(until.elementLocated(By.id(`name`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;

    // Get data from dataTable
    let data = dataTable.hashes();
    await this.driver.findElement(By.id(`name`)).sendKeys(data[0].project_name);
    await this.driver.findElement(By.id(`email[0]`)).sendKeys(data[0].email_group);
    await this.driver.findElement(By.id(`type[0]`)).click();
    await this.driver.findElement(By.xpath(`//li[text()='${data[0].type}']`)).click();
});

And('Click save project button', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body/div[2]//div/button[@class="ant-btn ant-btn-primary"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body/div[2]//div/button[@class="ant-btn ant-btn-primary"]`)).click();
});

Then('Show project popup with message {string}', async function (expected) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()='${expected}']`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
});

And('Confirm OK button', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body/div[4]//div[@class="ant-modal-confirm-btns"]/button`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body/div[4]//div[@class="ant-modal-confirm-btns"]/button`)).click();
});


// ======== Add Mail Account ========
And('Click add mail account button', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//div[@class="ant-card-body"]/div[4]//button`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body//div[@class="ant-card-body"]/div[4]//button`)).click();
});

And('Enter mail account information', async function (dataTable) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()='Add mail account']`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;

    // Get data from dataTable
    let data = dataTable.hashes();
    await this.driver.findElement(By.id(`email`)).sendKeys(data[0].email);
    await this.driver.findElement(By.id(`password`)).sendKeys(data[0].password);
    await this.driver.findElement(By.id(`serverId`)).click();

    // sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//ul/li[text()='${data[0].mail_server_name}']`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//ul/li[text()='${data[0].mail_server_name}']`)).click();
});

And('Click save mail account button', async function () {
    await this.driver.findElement(By.xpath(`/html/body/div[3]//div/button[@class="ant-btn ant-btn-primary"]`)).click();
});

Then('Show popup with message {string}', async function (message) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="${message}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
});

// DELETE MAIL LIST
And('Click icon delete at mail list name {string}', async function (mailList) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//tr[td[text()='${mailList}']]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body//tr[td[text()='${mailList}']]/td/div/i[@aria-label="icon: delete"]`)).click();
});

And('Confirm delete mail list', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="Are you sure delete this mail list ?"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body//div[@class="ant-modal-root"]//button[@class="ant-btn ant-btn-primary"]`)).click();
});

And('Confirm things will be deleted in this mail list', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="Things will be deleted in this mail list "]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.confirmButton = this.driver.findElement(By.xpath(`//div[@class="ant-modal-footer"]/button[1]`));
    await this.confirmButton.click();
    sleep.sleep(2);
});

And('Click delete things', async function () {
    await this.confirmButton.click();
});

Then('Show alert delete mail list {string}', async function (message) {
    sleep.sleep(5);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="${message}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
});
