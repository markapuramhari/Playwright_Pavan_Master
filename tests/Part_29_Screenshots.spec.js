import {test,expect} from '@playwright/test'
test('page screenshot',{tag:['@21To30','@26To30']},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshorts/'+Date.now()+'Homepage.png'})

})

test('Full page screenshot',{tag:['@21To30','@26To30']},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshorts/'+Date.now()+'Fullpage.png',fullPage:true})

})


test('Element screenshot',{tag:['@21To30','@26To30']},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator("img[alt='iPhone 6']").screenshot({path:'tests/screenshorts/'+Date.now()+'iPhone6img.png'})

})