//const {test,expect}= require('@playwright/test') 
import {test,expect} from '@playwright/test'
test('Homepage Test',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

//URL Validation
 
    const pageURL=await page.url();
    console.log('page URL is: ',pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

//Title Validation

    const pageTitle= await page.title()
    console.log('page Title is: ',pageTitle)
    await expect(page).toHaveTitle('STORE')

    await page.waitForTimeout(2000)
    await page.close()






})

