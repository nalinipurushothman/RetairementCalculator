import { Config } from '@wdio/sync';

export const config: Config = {
    runner: 'local',
    specs: ['./src/specs/**/*.ts'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.securian.com/insights-tools/retirement-calculator.html',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    before: function (capabilities, specs) {
        require('ts-node').register({ files: true });
    },
};
