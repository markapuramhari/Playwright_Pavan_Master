import {test,expect} from '@playwright/test'
test('Check Boxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#sunday').check()
    await expect(await page.locator('#sunday')).toBeChecked()
    await page.waitForTimeout(2000)

    await page.locator('#sunday').uncheck()
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    await page.waitForTimeout(2000)

//Click Mutipul check boxes
    const checkboxesLocators=['#sunday','#monday','#thursday','#saturday'];

    for(const locators of checkboxesLocators){
        await page.locator(locators).check()
    }
    await page.waitForTimeout(2000)

    for(const locators of checkboxesLocators){
        await page.locator(locators).uncheck()
    }

    await page.waitForTimeout(2000)
    await page.close()
})