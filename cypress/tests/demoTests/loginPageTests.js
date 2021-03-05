/// <reference types="cypress" />

import { loginPage } from '../../pages/loginPage/loginPage';
import { mainPage } from '../../pages/mainPage/mainPage';
import { globalTestsConfiguration } from '../../configuration/testsConfiguration/globalTestsConfiguration';
const paths = require('../../configuration/settings/paths');

describe('Login page user login tests', () => {
	beforeEach(function () {
		globalTestsConfiguration.beforeEachSetup({
			endpoint: paths.baseLoginEndpoint,
			pageClassObj: loginPage,
		});
	});

	context('Login page cookies test', () => {
		it('WHEN user go to the login page THEN logs in with correct data SHOULD see the visible logout link AND the header of the home page should meet requirements', () => {
			loginPage.login();
			mainPage.checkLoginState();
		});
	});
});
