import {test,expect} from '@playwright/test'
test('Part 26 Upload Files Test',{tag:['@26To30','@21To30']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	await page.locator('#singleFileInput').setInputFiles('uploadFiles/index.html')
	await page.getByRole('button',{name:'Upload Single File'}).click()
	
	await expect(await page.locator('#singleFileStatus')).toContainText('index.html')
	
	

	await page.locator('#multipleFilesInput').setInputFiles(['uploadFiles/index.html','uploadFiles/index1.html'])
	await page.getByRole('button',{name:'Upload Multiple Files'}).click()

	await expect(await page.locator('#multipleFilesStatus')).toContainText('Multiple files selected:')
	await expect(await page.locator('#multipleFilesStatus')).toContainText('index.html')
	await expect(await page.locator('#multipleFilesStatus')).toContainText('index1.html')
	
	await page.waitForTimeout(2000)
	await page.close()
})