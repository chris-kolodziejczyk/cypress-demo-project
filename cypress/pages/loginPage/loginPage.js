/// <reference types="cypress" />

import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';
import Utils from '../../support/utils/utils.js';

export class LoginPage extends BasePage {
	constructor() {
		super();
	}

	getLoginPageData(dataType = '', fixturePath = '') {
		return Utils.getFixtureData(fixturePath).then((userData) => {
			return {
				userDataObj: Object.keys(userData[dataType]).length
					? userData[dataType]
					: `Error: Invalid user data object -\nType: ${typeof userData}\nUser data: ${userData}`,
			};
		});
	}

	login(
		loginParams = {
			dataType: 'baseLoginData',
			fixturePath: 'loginPage/loginPageData',
			nameSelector: loginPageSelectors.username,
			passSelector: loginPageSelectors.password,
			loginSelector: loginPageSelectors.userLogin,
			loginBtnSelector: loginPageSelectors.loginBtn,
		}
	) {
		return this.getLoginPageData(
			loginParams.dataType,
			loginParams.fixturePath
		).then((loginData) => {
			cy.get(loginParams.nameSelector).then((nameElem) => {
				cy.get(loginParams.passSelector).then((passElem) => {
					cy.get(loginParams.loginSelector).then((loginElem) => {
						cy.get(loginParams.loginBtnSelector).then((loginBtnElem) => {
							const loginElems = [
								loginData.userDataObj.username,
								loginData.userDataObj.pass,
								loginData.userDataObj.userLogin,
								[nameElem, passElem, loginElem],
							];
							for (let i = 0; i < 3; i++) {
								cy.wrap(loginElems[3][i])
									.clear({ force: true })
									.type(loginElems[i]);
							}
							cy.wrap(loginBtnElem).click();
						});
					});
				});
			});
		});
	}
}

export const loginPage = new LoginPage();
