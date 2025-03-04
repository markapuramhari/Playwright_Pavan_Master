//const {test,expect} =require('@playwright/test')
import { test, expect } from '@playwright/test'
test('Part 04 Loginpage Test', { tag: ['@03To05', '@03To10'] }, async ({ page }) => {

	console.log('URL_demoblaze:', process.env.URL_demoblaze)
	await page.goto(process.env.URL_demoblaze)     //$env:ENV="QA"; || $env:ENV="local";

	//await page.getByRole('link', { name: 'Log in' }).click()
	await page.locator("//a[@id='cartur']/parent::li/following-sibling::li/a[@id='login2']").click()
	console.log('USERNAME_demoblaze:', process.env.USERNAME_demoblaze)
	await page.fill('#loginusername', process.env.USERNAME_demoblaze)
	console.log('PASSWORD_demoblaze:', process.env.PASSWORD_demoblaze)
	await page.fill('#loginpassword', process.env.PASSWORD_demoblaze)
	await page.getByRole('button', { name: 'Log in' }).click()
	await page.getByRole('link', { name: 'Log out' }).click()

	await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})