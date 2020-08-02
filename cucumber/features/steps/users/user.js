/**
 * Feature: User
 * Run script test for User page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const CONSTANTS = require('../../support/constants');
const Utils = require('../../support/utils');
// const assert = require('assert');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;

// Path name
const PATH_LOGIN = '/login/user';
const PATH_USER = '/admin/users';
const PATH_ADD_USER = '/admin/users/add';

let utils = new Utils();

Given('Login with user role: SYSTEM', async function (dataTable) {

    // Waiting for load Log In page
    await this.driver.get(utils.getHome(PATH_LOGIN));

    // Enter username and password
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id(`username`)).sendKeys(data[0].username);
    await this.driver.findElement(By.id(`password`)).sendKeys(data[0].password);
});

When('Visit to Add New User page', async function () {
    // Waiting for load Add New User page
    await this.driver.get(utils.getHome(PATH_ADD_USER));
    sleep.sleep(3);

    await chai.expect(this.driver.wait(until.elementLocated(By.id(`username`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;

    // Get all components in the page
    this.userNameSelector = this.driver.findElement(By.id(`username`));
    this.firstNameSelector = this.driver.findElement(By.id(`firstName`));
    this.lastNameSelector = this.driver.findElement(By.id(`lastName`));
    this.passwordSelector = this.driver.findElement(By.id(`password`));
});

And('Enter User information without email', async function (dataTable) {
    // Get data from dataTable
    let data = dataTable.hashes();

    // // Write data to components
    await this.userNameSelector.sendKeys(data[0].username);
    await this.firstNameSelector.sendKeys(data[0].first_name);
    await this.lastNameSelector.sendKeys(data[0].last_name);
    await this.passwordSelector.sendKeys(data[0].password);

    // Click Role dropdown list in order to show role items
    await this.driver.findElement(By.xpath(`//div[text()='USER']`)).click();

    // // Click to select role
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//li[text()="${data[0].role}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//li[text()="${data[0].role}"]`)).click();
});

And('Enter User information with email', async function (dataTable) {

    // Click User email in order to show mail server
    await this.driver.findElement(By.xpath(`//button[@role="switch"]`)).click();

    // Get data from dataTable
    let data = dataTable.hashes();

    // Write data to components
    await this.userNameSelector.sendKeys(data[0].username);
    await this.firstNameSelector.sendKeys(data[0].first_name);
    await this.lastNameSelector.sendKeys(data[0].last_name);
    await this.passwordSelector.sendKeys(data[0].password);

    // Click Role dropdown list in order to show role items
    await this.driver.findElement(By.xpath(`//div[text()='USER']`)).click();
    sleep.sleep(3);

    // Click to select role
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//li[text()="${data[0].role}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    await this.driver.findElement(By.xpath(`//li[text()="${data[0].role}"]`)).click();


    // Write mail server
    await this.driver.findElement(By.id(`email`)).sendKeys(data[0].email);
    await this.driver.findElement(By.id(`emailPassword`)).sendKeys(data[0].email_password);

    // Click Server dropdown list in order to show mail server items
    await this.driver.findElement(By.id(`serverId`)).click();
    sleep.sleep(3);

    // Click to select mail server item
    await this.driver.findElement(By.xpath(`//li[text()="${data[0].mail_server_name}"]`)).click();
});

And('Enter User information with account exist', async function (dataTable) {

     // Click User email in order to show mail server
     await this.driver.findElement(By.xpath(`//button[@role="switch"]`)).click();

     // Get data from dataTable
     let data = dataTable.hashes();
 
     // Write data to components
     await this.userNameSelector.sendKeys(data[0].username);
     await this.firstNameSelector.sendKeys(data[0].first_name);
     await this.lastNameSelector.sendKeys(data[0].last_name);
     await this.passwordSelector.sendKeys(data[0].password);
 
     // Click Role dropdown list in order to show role items
     await this.driver.findElement(By.xpath(`//div[text()='USER']`)).click();
     sleep.sleep(3);
 
     // Click to select role
     await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//li[text()="${data[0].role}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
     await this.driver.findElement(By.xpath(`//li[text()="${data[0].role}"]`)).click();
 
 
     // Write mail server
     await this.driver.findElement(By.id(`email`)).sendKeys(data[0].email);
     await this.driver.findElement(By.id(`emailPassword`)).sendKeys(data[0].email_password);
 
     // Click Server dropdown list in order to show mail server items
     await this.driver.findElement(By.id(`serverId`)).click();

     sleep.sleep(3);
 
     // Click to select mail server item
     await this.driver.findElement(By.xpath(`//li[text()="${data[0].mail_server_name}"]`)).click();
});

And('Click Save User', async function () {
    this.driver.findElement(By.className('ant-btn-primary')).click();
});

Then('Show alert with content {string}', async function (message) {
    sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//div[text()="${message}"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
});

// DELETE USER
When('Visit to User page', async function () {
    await this.driver.get(utils.getHome(PATH_USER));
    sleep.sleep(3);
});

And('Click icon delete at username {string}', async function (username) {
    sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`/html/body//tr[td[text()='${username}']]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body//tr[td[text()='${username}']]/td/div/i[@aria-label="icon: delete"]`)).click();
});

And('Confirm delete user', async function () {
    sleep.sleep(3);
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//span[text()="Do you want to delete this user?"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    this.driver.findElement(By.xpath(`/html/body//div[@class="ant-modal-root"]//button[@class="ant-btn ant-btn-primary"]`)).click();
});
