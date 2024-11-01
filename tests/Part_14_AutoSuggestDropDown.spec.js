import {test,expect} from '@playwright/test'

test('Auto Suggest DropDowns',{tag:'@11To20'}, async({page})=>{


   
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Hyderabad')

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const cityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let options of cityOptions) {
        const values= await options.textContent()
        console.log("values are: ",values)

        if(values.includes('Kukatpally')){
            await options.click()
            break
        }
    }


    await page.waitForTimeout(3000)
    await page.close()
})