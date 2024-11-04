import {test,expect} from '@playwright/test'
test('Check Boxes',{tag:'@03To10'}, async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#sunday').check()
    await expect(await page.locator('#sunday')).toBeChecked()
    await page.waitForTimeout(2000)

    await page.locator('#sunday').uncheck()
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    await page.waitForTimeout(2000)

//Click Mutipul check boxes
    const checkboxesLocators=['#sunday','#monday','#thursday','#saturday'];
   // const checkboxesLocators=["//input[@id='sunday']","//input[@id='monday']","//input[@id='friday']"]

    for(const checkbox of checkboxesLocators){
        await page.locator(checkbox).check()
    }
    await page.waitForTimeout(2000)

    for(const checkbox of checkboxesLocators){
        await page.locator(checkbox).uncheck()
    }

    await page.waitForTimeout(2000)
    await page.close()
})