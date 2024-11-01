import {test,expect} from '@playwright/test'
test('Inner Frames',{tag:'@11To20'},async ({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator("input[name='mytext3']").fill('Hari')


//Nested/inner frame

    const childFrames= await frame3.childFrames()

    await childFrames[0].locator("//div[@id='i5']/div[3]/div").check()


    await page.waitForTimeout(3000)
    await page.close()

})