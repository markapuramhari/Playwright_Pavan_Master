import {test,expect} from '@playwright/test'
test('Drag and Drop',async({page})=>{


    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome= await page.locator('#box6')
    const italy= await page.locator('#box106')

    const washington= await page.locator('#box3')
    const usa= await page.locator('#box103')


//Approach 1
    await rome.dragTo(italy)

//Appraoch 2

    await washington.hover()
    await page.mouse.down()

    await usa.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000)   



})