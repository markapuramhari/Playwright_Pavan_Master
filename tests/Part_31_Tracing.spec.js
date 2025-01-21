import { test, expect } from '@playwright/test'
test('Part 31 Tracing test', { tag: ['@31To38'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    //await page.locator('id=login2').click() (or)
    // await page.click('id=login2') (or)
    await page.getByRole('link', { name: 'Log in' }).click()


    //username

    // await page.locator('#loginusername').fill('markapuram')  (or)
    await page.fill('#loginusername', 'markapuram')

    //password

    await page.fill('#loginpassword', 'markapuram')

    //click

    //await page.click("//button[normalize-space()='Log in']")
    await page.getByRole('button', { name: 'Log in' }).click()

    //Validation

    const LogOutlink = page.locator("//a[normalize-space()='Log out']")
    await page.waitForTimeout(3000)
    await expect(LogOutlink).toBeVisible()

    await expect(page.getByText('Log out')).toBeVisible()
    await expect(page.getByText('Home')).toBeVisible()
    await expect(page.getByText('Product Store 2017')).toBeVisible()
    await expect(page.locator("//p[@class='m-0 text-center text-white']")).toBeVisible()

    const name = page.locator("//a[@id='nameofuser']")
    await expect(name).toBeVisible()

    await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible()
    await expect(page.getByText('welcome')).toBeVisible()

    await page.waitForTimeout(2000)
    await page.close()
})