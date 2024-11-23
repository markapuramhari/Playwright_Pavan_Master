//const {test,expect} =require('@playwright/test')
import { test, expect } from '@playwright/test'
test('Part 04 Loginpage Test', { tag: ['@03To05', '@03To10'] }, async ({ page }) => {

	console.log('URL:',process.env.URL)
	await page.goto(process.env.URL)

	//await page.getByRole('link', { name: 'Log in' }).click()
	await page.locator("//a[@id='cartur']/parent::li/following-sibling::li/a[@id='login2']").click()
	console.log('UN:',process.env.UN)
	await page.fill('#loginusername', process.env.UN)
	console.log('PWD:',process.env.PWD)
	await page.fill('#loginpassword', process.env.PWD)
	await page.getByRole('button', { name: 'Log in' }).click()
	await page.getByRole('link', { name: 'Log out' }).click()

	await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})