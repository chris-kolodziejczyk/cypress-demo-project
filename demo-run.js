/// <reference types="cypress" />

const cypress = require('cypress');
const program = require('commander');
const cypressGlobalConfig = require('./cypress/configuration/cypressGlobalConfig.js')
	.CypressGlobalConfig;

function runCypress() {
	if (program.open) {
		return cypress.open(new cypressGlobalConfig().getCypressOptions());
	}
	return cypress.run(new cypressGlobalConfig().getCypressOptions());
}

runCypress()
	.then((results) => {
		if (results.totalFailed > 0 || results.failures > 0) {
			// NOTE: Make sure to exit with an error code if tests failed
			process.exit(1);
		}

		process.exit(0);
	})
	.catch((err) => {
		console.error(err.stack || err);
		process.exit(1);
	});
