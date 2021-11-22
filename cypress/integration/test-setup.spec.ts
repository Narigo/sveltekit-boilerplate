export {};

describe('My First Test', () => {
	it('Does not do much!', () => {
		cy.visit('/');
		cy.get('h1').contains('SvelteKit boilerplate');
	});
});
