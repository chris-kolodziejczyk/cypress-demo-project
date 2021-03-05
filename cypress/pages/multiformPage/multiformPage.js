/// <reference types="cypress" />

import BasePage from '../basePage';
import multiformSelectors from './multiformSelectors';
import Utils from '../../support/utils/utils.js';

export class MultiformPage extends BasePage {
	constructor() {
		super();
	}

	optionsStatusChange(statusBtn = 'interests') {
		const statusArgv = ['profile', 'interests', 'payment'];
		return cy
			.get(multiformSelectors.statusBtns)
			.find('a')
			.then((statusOptionsElems) => {
				cy.wrap(statusOptionsElems).eq(statusArgv.indexOf(statusBtn)).click();
			});
	}

	fillProfileOptions(name = 'Krzysztof', email = 'example-automation@net.com') {
		return cy
			.get(multiformSelectors.formViewsOptions)
			.then((profileOptionsElem) => {
				cy.wrap(profileOptionsElem)
					.find(multiformSelectors.profileOptionsElems)
					.then((formGroupElems) => {
						cy.wrap(formGroupElems).eq(0).type(name);
						cy.wrap(formGroupElems).eq(1).type(email);
						cy.wrap(formGroupElems).find('a').click();
					});
			});
	}

	interestsOptions(console = 'psx', consoles = ['xbox', 'psx']) {
		return cy
			.wait(2000)
			.get(multiformSelectors.formViewsOptions)
			.then((formViewsElems) => {
				cy.wrap(formViewsElems)
					.find('label')
					.invoke('text')
					.then((interestsOptionsTxt) => {
						Utils.getFixtureData('multiformPage/multiformPageData').then(
							(multiformData) => {
								if (
									expect(interestsOptionsTxt).to.contains(
										multiformData.interestsConsoleHeader
									)
								) {
									cy.wrap(formViewsElems)
										.find(multiformSelectors.consoleRadioDiv)
										.then((elems) => {
											cy.get(multiformSelectors.consoleRadioLabel).then(
												(elemTwo) => {
													cy.wrap(elemTwo)
														.eq(consoles.indexOf(console))
														.click();
												}
											);
											cy.wrap(elems).eq(1).click();
										});
								}
							}
						);
					});
			});
	}

	paymentOptions() {
		cy.get(multiformSelectors.paymentCenterOptions).then((centerOptions) => {
			cy.wrap(centerOptions)
				.find('h3')
				.invoke('text')
				.then((testCompleteText) => {
					Utils.getFixtureData('multiformPage/multiformPageData').then(
						(testHeader) => {
							if (
								expect(testCompleteText).to.contains(
									testHeader.paymentTestHeader
								)
							) {
								cy.wrap(centerOptions).find(`button`).click();
								cy.on('window:alert', (completeAlert) => {
									expect(completeAlert).to.equal(`awesome!`);
								});
							}
						}
					);
				});
		});
	}
}

export const multiformPage = new MultiformPage();
