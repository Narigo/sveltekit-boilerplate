import ButtonTest from './ButtonTest.svelte';
import { render } from '@testing-library/svelte';

/**
 * @jest-environment jsdom
 */

describe('Button', () => {
	it('has a working test setup', () => {
		const { getByText } = render(ButtonTest);
		expect(getByText('Hello World')).not.toBeNull();
	});
});
