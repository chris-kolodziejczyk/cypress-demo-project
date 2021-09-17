// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-failed-log');
import './commands/readFile.js'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
	console.log('err :' + err);
	console.log('runnable :' + runnable);
	return false;
});