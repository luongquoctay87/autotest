/**
 * Feature: Log In
 * Run script test for LogIn page
 * @author TayLQ
 */

const { When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const CONSTANTS = require('../../support/constants');
const Utils = require('../../support/utils');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;


// Path name
const PATH_LOGIN = '/login/user';
let utils = new Utils();

/**
 * Scenario: User login success
 */
When("Login with account's role=SYSTEM", async function (dataTable) {
    
    // Waiting for load Log In page
    await this.driver.get(utils.getHome(PATH_LOGIN));

    // Enter username and password
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.id(`username`)).sendKeys(data[0].username);
    await this.driver.findElement(By.id(`password`)).sendKeys(data[0].password);
});

And('Click login button', async function () {
    this.driver.findElement(By.className(`login-form-button`)).click();
});

Then('User can see email home page', async function () {
    await chai.expect(this.driver.wait(until.elementLocated(By.xpath(`//h3[text()="Email list"]`)), CONSTANTS.STEP_TIMEOUTS.TIMEOUT)).to.be.fulfilled;
    sleep.sleep(3);
});
