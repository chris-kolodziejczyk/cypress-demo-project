export default class Utils {

/** Get fixture data from provided file in fixturePath parameters
 * @param {string} fixturePath - path to fixture file
 */
	static getFixtureData(fixturePath) {
		return cy.fixture(fixturePath).then((data) => {
			return data;
		});
	}
}
