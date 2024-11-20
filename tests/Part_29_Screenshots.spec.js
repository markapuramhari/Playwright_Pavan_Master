import { test } from '@playwright/test'
//test.describe.configure({mode:'serial'})
test('page screenshot', { tag: ['@21To30', '@26To30'] }, async ({ page }) => {


    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path: 'screenshorts/' + Date.now() + 'Homepage.png' })


})

test('Full page screenshot', { tag: ['@21To30', '@26To30'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path: 'screenshorts/' + Date.now() + 'Fullpage.png', fullPage: true })

})


test('Element screenshot', { tag: ['@21To30', '@26To30'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").screenshot({ path: 'screenshorts/' + Date.now() + 'Samsung.png' })

})