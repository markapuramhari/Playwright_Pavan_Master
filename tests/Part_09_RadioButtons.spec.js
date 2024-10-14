import {test,expect} from '@playwright/test'

test('Radio buttons',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    //await page.locator('#gender-female').click()
    await page.locator('#gender-female').check()

    await expect(await page.locator('#gender-female')).toBeChecked()


})