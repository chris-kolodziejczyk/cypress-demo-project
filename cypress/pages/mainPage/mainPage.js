/// <reference types="cypress" />

import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';
import Utils from '../../support/utils/utils.js';
const paths = require('../../configuration/settings/paths');

export class MainPage extends BasePage {
	constructor() {
		super();
	}

	getLoginHeader() {
		return cy.wait(2000).then(() => {
			if (cy.url().should('eq', paths.baseMainPageEndpoint)) {
				return cy.get(mainPageSelectors.logoutScope);
			}
		});
	}

	checkLoginState() {
		this.getLoginHeader().then((loginHeaderElem) => {
			cy.wrap(loginHeaderElem)
				.invoke('text')
				.then((loginHeaderTxt) => {
					return Utils.getFixtureData('mainPage/mainPageData').then(
						(mainPageData) => {
							cy.wrap(loginHeaderElem).find('a').should('be.visible');
							expect(loginHeaderTxt).to.equals(
								`${mainPageData.mainHeaderText}`
							);
						}
					);
				});
		});
	}
}

export const mainPage = new MainPage();
