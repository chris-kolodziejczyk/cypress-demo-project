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
		it('WHEN user go to the profile page AND fill profile with correct data THEN go to interests tab AND selects one of the console options THEN go to payments tab AND click submit button SHOULD see correct alert popup with correct text', () => {
			multiformPage.fillProfileOptions().then(() => {
				multiformPage.interestsOptions().then(() => {
					multiformPage.paymentOptions();
				});
			});
		});
	});
});
