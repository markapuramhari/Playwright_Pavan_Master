import { test, expect } from '@playwright/test'
test('Test1', { tag: '@31To38' }, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
    await page.close()

})
test('Test2', { tag: '@31To38' }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle('STORE')
    await page.close()

})
test('Test3', { tag: '@31To38' }, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/#')
    await expect(page).toHaveTitle('Automation Testing Practice')
    await page.close()

})