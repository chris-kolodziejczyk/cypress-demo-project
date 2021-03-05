const packageJson = require('../../../package.json');
const path = require('path');
const settings = require('../settings/settings.js').Settings;

module.exports = {
	downloads: path.join(__dirname, '..//../lib/documents/', 'downloads'),
	reports: path.join(__dirname, '../../results/', 'reports'),
	packageJson: packageJson,
	screenshots: path.join(__dirname, '../../results/', 'screenshots'),
	ffLunchOptions: path.join(
		__dirname,
		'../environments/firefox',
		new settings().firefoxConsoleArgv
	),
	ffPreferences: path.join(
		__dirname,
		'../environments/firefox',
		new settings().firefoxPreferencesArgv
	),
	chromiumLunchOptions: path.join(
		__dirname,
		'../environments/chromium',
		new settings().chromiumConsoleArgv
	),
	chromiumPreferences: path.join(
		__dirname,
		'../environments/chromium',
		new settings().chromiumPreferencesArgv
	),
	baseLoginEndpoint: '/registeration/#/login',
	baseMainPageEndpoint:
		'http://www.way2automation.com/angularjs-protractor/registeration/#/',
	multifirmEndpoint: '/multiform/#/form/profile',
};
