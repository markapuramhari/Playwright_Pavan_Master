import {test,expect} from '@playwright/test'
test('Mouse hover',{tag:['@21To30','@21To25']}, async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktops= await page.locator("//a[normalize-space()='Desktops']")
    const mac= await page.locator("//a[normalize-space()='Mac (1)']")
//mouse hover

    await desktops.hover()
    await mac.hover()
    await expect(mac).toHaveText('Mac (1)')
    await expect(mac).toBeVisible()
    await mac.click()


    await page.waitForTimeout(5000)
    await page.close()

})