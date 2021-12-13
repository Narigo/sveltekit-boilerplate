/// <reference types="cypress" />

export {};

describe('Headline', () => {
	it('can be read', () => {
		cy.visit('/iframe.html?id=components-headline--regular');
		cy.get('h2').contains('Hello World');
	});
});
