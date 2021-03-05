/// <reference types="cypress" />

export default class BaseTestsConfig {
	constructor() {}

	beforeEachBaseSetup(params) {
		// TODO:
		params.pageClassObj.visitPage(params.endpoint);

		if (Cypress.env().isMobile) {
			console.log('Akcje dla wersji mobilnej');
		} else if (Cypress.env().isTablet) {
			console.log('Akcje dla tabletu');
		} else {
			console.log('Akcje dla desktopu i innych');
		}
	}
}
