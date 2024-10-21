import {test,expect} from '@playwright/test'
import { url } from 'inspector'

test('Frames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')


//total frams

    const allframes= await page.frames()
    console.log('allframes:',allframes.length)


//Approach 1: using name or URL


    // await page.frame('name')  if name is present
    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    frame1.fill("//input[@name='mytext1']",'Hello')


//Approach 2: using frame locator

    await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']").fill('Hari')










    await page.waitForTimeout(3000)
    await page.close()

})