/**
 * Config environment
 * @author TayLQ
 */

const fs = require('fs')
const { Before, After, setDefaultTimeout, Status } = require('cucumber');
const webdriver = require('selenium-webdriver');
const CONSTANTS = require('./constants');
const Utils = require('./utils');


const RESULTS_FOLDER_PATH = './tests/results';

const EVENTS = {
    EXIT: 'exit',
    UNCAUGHTEXCEPTION: 'uncaughtException'
};

let driver;
let utils = new Utils();

process.on(EVENTS.EXIT, exitHandler);
process.on(EVENTS.UNCAUGHTEXCEPTION, exitHandler);
createTestResultFolderIfNeeded();

async function deinitWebdriver() {
    if (!driver) {
        return;
    }
    try {
        await driver.quit();
    } catch (error) {
    }
    driver = undefined;
}

async function exitHandler() {
    await deinitWebdriver();
    process.exit();
};

function createTestResultFolderIfNeeded() {
    if (!fs.existsSync(RESULTS_FOLDER_PATH)) {
        fs.mkdirSync(RESULTS_FOLDER_PATH);
    }
}

async function tryAttachScreenshot(world) {
    try {
        const screenshot = await world.driver.takeScreenshot();
        world.attach(screenshot, 'image/png');
    } catch (error) {
        console.warn('Unable to capture screenshot.');
    }
}

//  Prepare environment test
Before({ timeout: CONSTANTS.HOOK_TIMEOUTS.BEFORE }, async function (scenario) {

    setDefaultTimeout(CONSTANTS.CUCUMBER_TEST_ASYNC_TIMEOUT);

    const scenarioName = scenario.pickle.name;
    const builder = new webdriver.Builder();

    driver = await builder.forBrowser(`${process.env.TEST_BROWSER}` || 'chrome').build();
    this.driver = driver;

    await this.driver.get(utils.getHome());
});

// Exit Driver
After({ timeout: CONSTANTS.HOOK_TIMEOUTS.AFTER }, async function (scenario) {
    if (!this.driver) {
        return;
    }

    if (scenario.result.status === Status.FAILED) {
        await tryAttachScreenshot(this);
        console.log(`Scenario - ${scenario.pickle.name} - FAILED`)
    }

    await deinitWebdriver();
    delete this.driver;
});
