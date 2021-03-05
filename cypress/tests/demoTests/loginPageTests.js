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
		it('When accept Cookies Then checkCookiesNotVisible Should check if cookies warning is not visible', () => {
			loginPage.login();
			mainPage.checkLoginState();
		});
	});
});
