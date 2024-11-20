/*
1. URL ==> 
2. Title ==>
3. Visible ==> 
4. Enabled ==> 
5. Checked ==> 
6. Attribute ==> 
7. Text ==> 
8. ContainText ==> 
9. Value ==> 
10. Count ==>
*/

import { test, expect } from '@playwright/test'
test('Part 07 Assertions Test', { tag: ['@03To10'] }, async ({ page }) => {

	await page.goto('https://demo.nopcommerce.com/register')

	//URL
	await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

	//Title
	await expect(page).toHaveTitle('nopCommerce demo store. Register')

	//Visible
	await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

	//Enabled
	await expect(page.getByRole('button', { name: 'SEARCH' })).toBeEnabled()

	//Checked
	await expect(page.locator('#Newsletter')).toBeChecked()

	//Attribute
	await expect(page.locator('#register-button')).toHaveAttribute('name', 'register-button')

	//Text
	await expect(page.getByText('Your Password')).toHaveText('Your Password')

	//ContainText
	await expect(page.getByText('Your Password')).toContainText('Password')

	//Value
	const val = page.locator('#Company')
	val.fill('Hari')
	await expect(val).toHaveValue('Hari')

	//Count

	const count1 = page.locator('a')
	await expect(count1).toHaveCount(61)

	const count = await page.$$('a')
	expect(count.length).toBe(61)

	await page.waitForTimeout(2000)
	await page.close()
})