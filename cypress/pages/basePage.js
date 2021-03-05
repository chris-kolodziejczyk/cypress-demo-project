/// <reference types="cypress" />

export default class BasePage {
	constructor() {
		this.url = '';
	}

	visitPage(url = '/') {
		cy.visit((this.url = url))
			.url()
			.should('include', this.url);

		return this;
	}
}
