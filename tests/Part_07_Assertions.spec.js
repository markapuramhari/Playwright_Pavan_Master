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

import {test,expect} from '@playwright/test'
test('Part 07 Assertions Test',{tag:['@03To10']},async({page})=>{

	await page.goto('https://demo.nopcommerce.com/register')
	
//URL
	await expect(await page).toHaveURL('https://demo.nopcommerce.com/register')
	
//Title
	await expect(await page).toHaveTitle('nopCommerce demo store. Register')
	
//Visible
	await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible()
	
//Enabled
	await expect(await page.getByRole('button',{name:'SEARCH'})).toBeEnabled()
	
//Checked
	await expect(await page.locator('#Newsletter')).toBeChecked()
	
//Attribute
	await expect(await page.locator('#register-button')).toHaveAttribute('name','register-button')
	
//Text
	await expect(await page.getByText('Your Password')).toHaveText('Your Password')
	
//ContainText
	await expect(await page.getByText('Your Password')).toContainText('Password')
	
//Value
	const val= await page.locator('#Company')
	val.fill('Hari')
	await expect(await val).toHaveValue('Hari')
	
//Count

	const count1=await page.locator('a')
	await expect(count1).toHaveCount(61)

	const count=await page.$$('a')
	await expect(count.length).toBe(61)
	
	await page.waitForTimeout(2000)
	await page.close()
})