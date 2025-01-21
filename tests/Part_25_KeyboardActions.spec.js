import { test, expect } from '@playwright/test'
test('Part 25 Keyboard Actions Test', { tag: ['@21To25', '@21To30'] }, async ({ page }) => {

	await page.goto('https://gotranscript.com/text-compare')

	await page.getByPlaceholder('Paste one version of the text here.').fill('HARI')

	await page.keyboard.press('Control+A')
	await page.keyboard.press('Control+C')
	await page.keyboard.down('Tab')
	await page.keyboard.up('Tab')
	await page.keyboard.press('Control+V')

	const exp = page.getByPlaceholder('Paste another version of the text here.')

	await expect(exp).toHaveValue('HARI')

	//await page.click('#recaptcha')

	await expect(page.getByText('Free online text compare tool')).toHaveText('Free online text compare tool')
	await expect(page.getByText('Free online text compare tool')).toContainText('compare tool')

	await page.waitForTimeout(2000)
	await page.close()
})