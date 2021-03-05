/// <reference types="cypress" />

import { multiformPage } from '../../pages/multiformPage/multiformPage';
import { globalTestsConfiguration } from '../../configuration/testsConfiguration/globalTestsConfiguration';
const paths = require('../../configuration/settings/paths');

describe('Login page user login tests', () => {
	beforeEach(function () {
		globalTestsConfiguration.beforeEachSetup({
			endpoint: paths.multifirmEndpoint,
			pageClassObj: multiformPage,
		});
	});

	context('Login page cookies test', () => {
		it('When accept Cookies Then checkCookiesNotVisible Should check if cookies warning is not visible', () => {
			multiformPage.fillProfileOptions().then(() => {
				multiformPage.interestsOptions().then(() => {
					multiformPage.paymentOptions();
				});
			});
		});
	});
});
