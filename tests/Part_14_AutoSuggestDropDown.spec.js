import {test,expect} from '@playwright/test'
test('Google Search Test',{tag:'@11To20'},async({page})=>{


	await page.goto('https://www.google.com/')
	
	await page.fill('#APjFqb','selenium')
	
	await page.waitForSelector('.wM6W7d span')
	const options= await page.$$(".wM6W7d span")
	
	for(let option of options){
	
		const textOptions=await option.textContent()
		console.log('textOptions: ',textOptions)
		if(textOptions.includes('selenium download')){
		
			await option.click()
			break
		
		}
	
	}
	
	
	await page.waitForTimeout(3000)
	await page.close()


})