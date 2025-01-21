import { test, expect } from '@playwright/test'
test('Part 36 Test1', { tag: ['@31To38'] }, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
    await page.close()

})
test('Part 36 Test2', { tag: ['@31To38'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle('STORE')
    await page.close()

})
test('Part 36 Test3', { tag: ['@31To38'] }, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/#')
    await expect(page).toHaveTitle('Automation Testing Practice')
    await page.close()

})