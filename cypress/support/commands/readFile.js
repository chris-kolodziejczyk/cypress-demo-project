Cypress.Commands.add('readDataFromFile', (filePath, encoding) => {
	cy.readFile(filePath, encoding).then((txt) => {
		console.log(txt);
	});
});
