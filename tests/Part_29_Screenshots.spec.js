import { test } from '@playwright/test'
test.describe.configure({ mode: 'parallel' })  //  serial
test('Part 29 page screenshot', { tag: ['@26To30', '@21To30'] }, async ({ page }) => {


    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path: 'screenshorts/' + Date.now() + 'Homepage.png' })


})

test('Part 29 Full page screenshot', { tag: ['@26To30', '@21To30'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path: 'screenshorts/' + Date.now() + 'Fullpage.png', fullPage: true })

})


test('Part 29 Element screenshot', { tag: ['@26To30', '@21To30'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").screenshot({ path: 'screenshorts/' + Date.now() + 'Samsung.png' })

})