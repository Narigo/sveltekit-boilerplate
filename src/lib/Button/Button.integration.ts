/// <reference types="cypress" />

export {};

const getIframeDocument = () =>
	cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

const getIframeBody = () =>
	getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

describe('Button', () => {
	it('can be clicked', () => {
		cy.visit('/');

		cy.get('#components-button--regular').click();
		getIframeBody();
		cy.get('button').contains('Button');
	});
});
