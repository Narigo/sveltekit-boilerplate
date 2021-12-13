/// <reference types="cypress" />

export {};

describe('Button', () => {
	it('can be clicked', () => {
		cy.visit('/iframe.html?id=components-button--regular');
		cy.get('button').contains('Button').click();
	});
});
