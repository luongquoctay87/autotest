/**
 * Feature: Setting Project
 * Run script test for Setting Project page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { Given, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const Utils = require('../../support/utils');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;

// Path name
const PATH_LOGIN = '/login/user';
const PATH_SETTING_PROJECT = '/admin/setting/project';
let utils = new Utils();

Given('Login with user role: LEADER', async function (dataTable) {

    // Waiting for load Log In page
    await this.driver.get(utils.getHome(PATH_LOGIN));

    // Enter username and password
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id(`username`)).sendKeys(data[0].username);
    await this.driver.findElement(By.id(`password`)).sendKeys(data[0].password);
});

When('Visit to Setting Project page', async function () {
    // Waiting for load Setting Project page
    await this.driver.get(utils.getHome(PATH_SETTING_PROJECT));
});

And('Click to project name {string}', async function (name) {
    sleep.sleep(2);
    await this.driver.findElement(By.xpath(`html/body//div/table/tbody/tr[td[text()='${name}']]`)).click();
});

And('Click edit Project button', async function () {
    sleep.sleep(2);
    await this.driver.findElement(By.xpath(`//button[@class="ant-btn ant-btn-dashed"]`)).click();
});


And('Enter Setting Project rules', async function (dataTable) {
    // Get data from dataTable
    let data = dataTable.hashes();

    await this.driver.findElement(By.xpath(`//input[@placeholder="Service Group Code"]`)).sendKeys(data[1].service);
    await this.driver.findElement(By.xpath(`//input[@placeholder="client"]`)).sendKeys(data[3].service);
    await this.driver.findElement(By.xpath(`//input[@placeholder="NG word"]`)).sendKeys(data[5].service);
    
    // Write data to service
    await this.driver.findElement(By.xpath(`//input[@placeholder="Service Name"]`)).sendKeys(data[1].service_name);
    await this.driver.findElement(By.xpath(`//input[@placeholder="Service Code"]`)).sendKeys(data[3].service_name);
    await this.driver.findElement(By.xpath(`//input[@placeholder="Destination Email"]`)).sendKeys(data[5].service_name);

    // Write data to person in charge
    await this.driver.findElement(By.xpath(`//input[@placeholder="Name of person in charge"]`)).sendKeys(data[1].person_in_charge);
    await this.driver.findElement(By.xpath(`//input[@placeholder="Phone of person in charge"]`)).sendKeys(data[3].person_in_charge);
    await this.driver.findElement(By.xpath(`//input[@placeholder="Email of person in charge"]`)).sendKeys(data[5].person_in_charge);
});

And('Click Save Setting Project', async function () {
    await this.driver.findElement(By.xpath(`//button[@class="ant-btn ant-btn-primary"]`)).click();
    sleep.sleep(2);
});