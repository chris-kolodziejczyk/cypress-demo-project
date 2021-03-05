import BaseTestsconfig from './baseTestsConfig';

export class GlobalTestsConfiguration extends BaseTestsconfig {
	constructor() {
		super();
	}

	beforeSetup() {}

	beforeEachSetup(params) {
		// TODO:
		this.beforeEachBaseSetup(params);

		if (Cypress.env().isMobile) {
			// TODO:
		} else if (Cypress.env().isTablet) {
			// TODO:
		} else {
			// TODO:
		}
	}
}
export const globalTestsConfiguration = new GlobalTestsConfiguration();
