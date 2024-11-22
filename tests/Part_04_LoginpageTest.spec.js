//const {test,expect} =require('@playwright/test')
import { test, expect } from '@playwright/test'
test('Part 04 Loginpage Test', { tag: ['@03To05', '@03To10'] }, async ({ page }) => {

	await page.goto('https://www.demoblaze.com/index.html')

	//await page.getByRole('link', { name: 'Log in' }).click()
	await page.locator("//a[@id='cartur']/parent::li/following-sibling::li/a[@id='login2']").click()
	await page.fill('#loginusername', 'markapuram')
	await page.fill('#loginpassword', 'markapuram')
	await page.getByRole('button', { name: 'Log in' }).click()
	await page.getByRole('link', { name: 'Log out' }).click()

	await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})