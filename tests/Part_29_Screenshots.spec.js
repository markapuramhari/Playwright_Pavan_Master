import {test,expect} from '@playwright/test'
test('page screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshorts/'+Date.now()+'Homepage.png'})

})

test('Full page screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshorts/'+Date.now()+'Fullpage.png',fullPage:true})

})


test('Element screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator("img[alt='iPhone 6']").screenshot({path:'tests/screenshorts/'+Date.now()+'iPhone6img.png'})

})