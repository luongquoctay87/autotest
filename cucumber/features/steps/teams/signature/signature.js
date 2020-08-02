/**
 * Feature: Signature
 * Run script test for Signature page
 * @author TayLQ
 */

// Include modules and define the Gherkin keywords
const { When } = require('cucumber');
const { By } = require('selenium-webdriver');
const sleep = require('sleep');
const chai = require('chai');
const promised = require('chai-as-promised');
chai.use(promised);
And = When;


And('Click icon signature of team {string}', async function (team) {
    await this.driver.findElement(By.xpath(`//tr[td[text()="${team}"]]/td[4]/div/a/i[@aria-label="icon: form"]`)).click();
});

And('Click button Add signature', async function () {
    await this.driver.findElement(By.xpath(`//main//div[@class="ant-card-body"]//button`)).click();
});

And('Enter signature information', async function (dataTable) {
    // Get data from dataTable
    let data = dataTable.hashes();

    // Write data to components
    await this.driver.findElement(By.xpath(`//input[@placeholder="Description..."]`)).sendKeys(data[0].description);
    await this.driver.findElement(By.id(`create-signature-content`)).sendKeys(data[0].content);
});

And('Click icon save signature', async function () {
    sleep.sleep(3);
    await this.driver.findElement(By.xpath(`//div[@class="antd-pro-pages-admin-team-signature-antCard"]/div/button[@class="ant-btn ant-btn-primary"]`)).click();;
});

// Then Show message "Add new signature successfully!"