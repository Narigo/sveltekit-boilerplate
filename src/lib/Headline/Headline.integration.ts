import { expect, test } from '@playwright/test';

test.describe('Headline', () => {
	test('can be read', async ({ page }) => {
		await page.goto(
			'http://localhost:6006/iframe.html?id=components-headline--regular&viewMode=story',
			{ waitUntil: 'networkidle' }
		);
		const headline = page.locator('#root > h2');
		await headline.waitFor();
		await expect(headline).toHaveText('Hello World');
	});
});
