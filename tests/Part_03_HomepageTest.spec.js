//const {test,expect}= require('@playwright/test')
import { test, expect } from '@playwright/test'
test('Part 03 Homepage Test', { tag: ['@03To05', '@03To10'] }, async ({ playwright }) => {

	const browser = await playwright.chromium.launch({ channel: 'chrome' }) //msedge
	const context = await browser.newContext()
	const page = await context.newPage()
	await page.goto('https://www.demoblaze.com/index.html')

	const pageURL = page.url()
	console.log('pageURL: ', pageURL)
	await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

	const pageTitle = await page.title()
	console.log('pageTitle: ', pageTitle)
	await expect(page).toHaveTitle('STORE')

	await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})