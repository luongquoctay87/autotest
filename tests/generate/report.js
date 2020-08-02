/**
 * Generate report after run test following to scenario
 * @author TayLQ
 */

const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './tests/results/',
    reportPath: './tests/results/',
    openReportInBrowser: true,
    // saveCollectedJSON: true,
    // disableLog: true,
    pageTitle: 'Automation Testing Reporter',
    reportName: 'Automation Testing Reporter',
    pageFooter: 'Copyright &copy; May 2020, NAL Solution JSC - Hanoi, VietNam',
    metadata:{
        browser: {
            name: 'chrome',
            version: '81.0.4044.69'
        },
        device: 'Local test machine',
        platform: {
            name: 'osx',
            version: '10.12.6'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Front End'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Start Time', value: new Date()},
            {label: 'End Time', value: new Date()}
        ]
    }
});