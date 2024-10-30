import {test,expect} from '@playwright/test'
test('Part 12 Multi Select DropDown Test',async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	const options= await page.$$("//select[@id='colors']/option")
	
	await expect(await options.length).toBe(7)
	
	await page.selectOption('#colors',['Red','Blue','Yellow'])
	
	const val= await page.locator('#colors').textContent()
	await expect(await val.includes('Red')).toBeTruthy()
	await expect(await val.includes('Black')).toBeFalsy()
	
	
	await page.waitForTimeout(3000)
	await page.close()


})