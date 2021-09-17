/// <reference types="cypress" />

export default class BaseTestsConfig {
	constructor() {}

	beforeEachBaseSetup(params) {
		// TODO:
		params.pageClassObj.visitPage(params.endpoint);

		if (Cypress.env().isMobile) {
			console.log('Actions for the mobile version');
		} else if (Cypress.env().isTablet) {
			console.log('Actions for the tablet');
		} else {
			console.log('Actions for desktop and others');
		}
	}
}
