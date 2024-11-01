import {test,expect} from '@playwright/test'
test('Double Click',{tag:'@21To30'},async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#')

    const button= await page.locator("//button[normalize-space()='Copy Text']")

    await button.dblclick()
    const textV= await page.locator('#field2')
    await expect(textV).toHaveValue('Hello World!')

    await page.waitForTimeout(2000)
    await page.close()

})