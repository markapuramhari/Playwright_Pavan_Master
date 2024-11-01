import {test,expect} from '@playwright/test'
test("Input Box",{tag:'@01To10'},async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

 //input
    await expect(await page.locator('#FirstName')).toBeVisible()
    await expect(await page.locator('#FirstName')).toBeEmpty()
    await expect(await page.locator('#FirstName')).toBeEditable()
    await expect(await page.locator('#FirstName')).toBeEnabled()

    await page.fill('#FirstName','Hari')
    await page.waitForTimeout(2000)
    await page.close()
})