import {test,expect} from '@playwright/test'
//test.describe.configure({mode:'serial'})
test('page screenshot',{tag:['@21To30','@26To30']},async({page})=>{


    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'screenshorts/'+Date.now()+'Homepage.png'})
    

})

test('Full page screenshot',{tag:['@21To30','@26To30']},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'screenshorts/'+Date.now()+'Fullpage.png',fullPage:true})

})


test('Element screenshot',{tag:['@21To30','@26To30']},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator("img[alt='iPhone 6']").screenshot({path:'screenshorts/'+Date.now()+'iPhone6img.png'})

})