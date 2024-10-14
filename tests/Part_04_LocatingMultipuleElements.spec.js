import {test,expect} from '@playwright/test'

test("Mutipule Elements",async ({page})=>{


    await page.goto('https://www.demoblaze.com/index.html')

    
    const links= await page.$$('a')
    for(const link of links){

        const linktext= await link.textContent()
        console.log('All links: '+linktext)
    }
    

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a")
    
    for(const product of products){
        const productname= await product.textContent()
        console.log(productname)
    }


})