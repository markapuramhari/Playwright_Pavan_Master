import {test,expect} from '@playwright/test'
test('Part 10 Checkboxes Test',{tag:['@03To10']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#sunday').check()
    await expect(await page.locator('#sunday')).toBeChecked()
    await page.waitForTimeout(1000)

    await page.locator('#sunday').uncheck()
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    await page.waitForTimeout(1000)
	
	const checkboxes=["//input[@id='monday']","//input[@id='sunday']","//input[@id='friday']"]
	
	for(const check of checkboxes){
		await page.locator(check).check()
	}
	
	await page.waitForTimeout(1000)

	for(const check of checkboxes){
		await page.locator(check).uncheck()
	}
	
	await page.waitForTimeout(1000)
	await page.close()
})