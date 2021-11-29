/**
 * @jest-environment jsdom
 */
/// <reference types="jest" />
import ButtonTest from './ButtonTest.svelte';
import { render } from '@testing-library/svelte';

describe('Button', () => {
	it('has a working test setup', () => {
		const { getByText } = render(ButtonTest);
		expect(getByText('Hello world!')).not.toBeNull();
	});
});
