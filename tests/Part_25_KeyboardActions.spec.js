import {test,expect} from '@playwright/test'

test('Keyboard Actions',{tag:['@21To30','@21To25']},async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

   // await page.locator("name='text1'").fill('This is Hari')
    await page.fill("[name='text1']",'This is Hari')
   
//Ctrl+A
    await page.keyboard.press('Control+A')

//Ctrl+C

await page.keyboard.press('Control+C')

//Tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab')

//Ctrl+V
await page.keyboard.press('Control+V')


const exp= await page.locator("[name='text2']")
await expect(exp).toHaveValue('This is Hari')

    await page.waitForTimeout(3000)
    await page.close()

})