import { test, expect } from '@playwright/test'
test('Part 21 Mouse hover Test', { tag: ['@21To30', '@21To25'] }, async ({ page }) => {

	await page.goto('https://demo.opencart.com/')

	const desktop = page.getByRole('link', { name: 'Desktops' })
	const mac = page.getByRole('link', { name: 'Mac (1)' })

	await desktop.hover()
	await mac.hover()
	await mac.click()

	//await expect(await page.getByRole('link',{name:'iMac'})).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})