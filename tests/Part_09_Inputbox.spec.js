import {test,expect} from '@playwright/test'
test("Input Box",async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

 //input
    await expect(await page.locator('#FirstName')).toBeVisible()
    await expect(await page.locator('#FirstName')).toBeEmpty()
    await expect(await page.locator('#FirstName')).toBeEditable()
    await expect(await page.locator('#FirstName')).toBeEnabled()

    await page.locator('#FirstName').fill('Hari')
    await page.waitForTimeout(2000)
})