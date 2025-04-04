//const {test,expect}= require('@playwright/test')
import { test, expect,chromium } from '@playwright/test'
test.describe.configure({ mode: 'serial' })

test('Part 03 Homepage Test', { tag: ['@03To05', '@03To10'] }, async () => {

	//const browser = await playwright.chromium.launch({ channel: 'chrome',headless:false }) //msedge
	const browser = await chromium.launch({ channel: 'chrome',headless:false })
	const context = await browser.newContext()
	const page = await context.newPage()

	//await page.goto('https://www.demoblaze.com/index.html')
	//await page.goto('/index.html') //base URL
	
	await page.goto(process.env.URL_demoblaze) //env URL    //$env:ENV="QA"; || $env:ENV="local";

	const pageURL = page.url()
	console.log('pageURL: ', pageURL)
	await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

	const pageTitle = await page.title()
	console.log('pageTitle: ', pageTitle)
	await expect(page).toHaveTitle('STORE')

	await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()
	const Btnlogin=page.locator("//a[@id='cartur']/parent::li/following-sibling::li/a[@id='login2']")
	await expect(Btnlogin).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})