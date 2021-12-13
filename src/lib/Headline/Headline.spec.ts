/**
 * @jest-environment jsdom
 */
/// <reference types="jest" />
import HeadlineTest from './HeadlineTest.svelte';
import { render } from '@testing-library/svelte';

describe('Headline', () => {
	it('is readable', () => {
		const { getByText } = render(HeadlineTest);
		expect(getByText('Hello World')).not.toBeNull();
	});
});
