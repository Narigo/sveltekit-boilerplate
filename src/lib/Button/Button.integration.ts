import { expect, test } from '@playwright/test';

test.describe('Button', () => {
	test('can be clicked', async ({ page }) => {
		await page.goto(
			'http://localhost:6006/iframe.html?id=components-button--regular&viewMode=story',
			{ waitUntil: 'networkidle' }
		);
		const button = page.locator('#root > button');
		await button.waitFor();
		await expect(button).toHaveText('Button');
		await button.click();
		await expect(true).toBe(true);
	});
});
