/**
 * Feature: Mail Server
 * Run script test for Mail Server page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const CONSTANTS = require('../../support/constants');
const Utils = require('../../support/utils');
const chai = require('chai');
const sleep = require('sleep');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;

// Path name
const PATH_MAIL_SERVER = '/admin/mailServer';

let utils = new Utils();

When('Visit to Mail Server page', async function () {
    await this.driver.get(utils.getHome(PATH_MAIL_SERVER));
});

And('Click add new mail server button', async function () {
    this.driver.findElement(By.className('ant-btn-dashed')).click();
});

And('Enter Mail Server information', async function (dataTable) {

    await chai.expect(this.driver.wait(until.elementLocated(By.id('name')), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
   
    // Get data from dataTable
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id('name')).sendKeys(data[0].mail_server_name);
    await this.driver.findElement(By.id('inName')).sendKeys(data[0].name);
    await this.driver.findElement(By.id('inPort')).sendKeys(data[0].port);
    await this.driver.findElement(By.id('inProtocol')).click();

    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//li[text()="${data[0].protocol}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//li[text()="${data[0].protocol}"]`)).click();

    await this.driver.findElement(By.id('outName')).sendKeys(data[1].name);
    await this.driver.findElement(By.id('outPort')).sendKeys(data[1].port);
    await this.driver.findElement(By.className('ant-switch')).click();
});

Then('Click Save Mail Server', async function () {
    await this.driver.findElement(By.className(`ant-btn-primary`)).click();
});


// DELETE MAIL SERVER
And('Click icon delete of {string}', async function (server) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//tr[td[text()='${server}']]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body//tr[td[text()='${server}']]/td/div/i[@aria-label="icon: delete"]`)).click();
    sleep.sleep(3);
});

And('Confirm delete Mail Server', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="Are you sure delete this Mail Server ?"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body//div[@class="ant-modal-root"]//button[@class="ant-btn ant-btn-primary"]`)).click();
});

Then('Show message {string}', async function (message) {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="${message}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
});
