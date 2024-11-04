import {test,expect} from '@playwright/test'

test('Multi Select DropDown',{tag:'@11To20'},async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors',['Blue','Red','Yellow'])

//Assertions
 
//1. check number of options  in dropdown
    const options= await page.locator("//select[@id='colors']/option")
    await expect(options).toHaveCount(7)

//OR
    const optionsArray= await page.$$("//select[@id='colors']/option")
    console.log('clount of options:',optionsArray.length)
    await expect(optionsArray.length).toBe(7)

//2. check presence of value or not in dropdown

    const content= await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy() 
    await expect(content.includes('Black')).toBeFalsy() 


    let status=false
	for(const option of optionsArray){
	
		const textOption=await option.textContent()
		console.log('textOption: ',textOption)
		if(textOption.includes('Green')){
		
			status=true

		}
	
	}
	await expect(status).toBeTruthy()

    await page.waitForTimeout(2000)
    await page.close()
})