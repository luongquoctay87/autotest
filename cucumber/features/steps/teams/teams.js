/**
 * Feature: Teams
 * Run script test for Teams page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When, Then } = require('cucumber');
const { By, until  } = require('selenium-webdriver');
const CONSTANTS = require('../../support/constants');
const Utils = require('../../support/utils');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;

// Path name
const PATH_TEAMS = '/admin/teams';

let utils = new Utils();

When('Visit Team List page', async function () {
    await this.driver.get(utils.getHome(PATH_TEAMS));
    sleep.sleep(3);
});

And('Click add new button', async function () {
    await this.driver.findElement(By.className(`ant-btn ant-btn-dashed`)).click();
});

And('Enter Team information', async function (dataTable) {
    // Get data from dataTable
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id(`name`)).sendKeys(data[0].team_name);
    await this.driver.findElement(By.id(`mailLists`)).click();
    await this.driver.findElement(By.xpath(`//ul/li[text()='${data[0].mail_list_name}']`)).click()
    await this.driver.findElement(By.id(`description`)).sendKeys(data[0].description);
});

And('Click save team button', async function () {
    await this.driver.findElement(By.xpath(`//div[@class='ant-modal-footer']/div/button[2]`)).click();;
});

And('Click icon add member of {string}', async function (team) {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//tr[td[text()='${team}']]/td/div/a[i[@aria-label='icon: team']]`)).click();
});

And('Click Add member button', async function () {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//div[@class='ant-card-extra']/button`)).click();
});

And('Click add member {string}', async function (account) {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//tr[td[text()='${account}']]/td/div/button`)).click();;
});

// DELETE TEAM
And('Click icon delete team {string}', async function (team) {
    sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//tr[td[text()='${team}']]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`/html/body//tr[td[text()='${team}']]/td/div/i[@aria-label="icon: delete"]`)).click();
    
});

And('Confirm delete Team', async function () {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`/html/body//div[@class="ant-modal-root"]//button[@class="ant-btn ant-btn-primary"]`)).click();
});

// Then Show message "Successfully deleted !"