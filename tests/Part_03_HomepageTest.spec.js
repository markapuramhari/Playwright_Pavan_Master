//async -->return promiss
 //await --> wait for the promiss 
 //()=>{} -->  async ({page})=>{}

//const {test,expect}= require('@playwright/test') 
import {test,expect} from '@playwright/test'
test('Homepage',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    const pageURL=await page.url();
    console.log('page URL is:'+pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    const pageTitle= await page.title()
    console.log('page Title is:'+pageTitle)
    await expect(page).toHaveTitle('STORE')

    await page.close()






})

