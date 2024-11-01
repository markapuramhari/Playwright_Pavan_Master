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

import{test,expect} from '@playwright/test'
test('Part 08 Soft Assertions Test',{tag:'@01To10'},async({page})=>{

	await page.goto('https://demo.nopcommerce.com/register')
	
//URL
	await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')
	
//Title
	await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')

//Visible
	await expect.soft(await page.getByAltText('nopCommerce demo store')).toBeVisible()
	
//Enabled
	await expect.soft(await page.locator('#small-searchterms')).toBeEnabled()
	
//Checked
	const male=await page.locator('#gender-male')
	male.click()
	await expect.soft(male).toBeChecked()

//Attribute
	await expect.soft(male).toHaveAttribute('id','gender-male')
	
//Text
	const text= await page.getByText('Company Details')
	await expect.soft(text).toHaveText('Company Details')

//ContainText

	await expect.soft(text).toContainText('Details')
	
//Value
	const search= await page.locator('#small-searchterms')
	await search.fill('HARI')
	await expect.soft(search).toHaveValue('HARI')
	
//Count

	const count= await page.locator('a')
	await expect.soft(count).toHaveCount(61)


	await page.waitForTimeout(3000)
	await page.close()
})