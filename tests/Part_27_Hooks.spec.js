import { test, expect } from '@playwright/test'
test.describe.configure({ mode: 'parallel' })  //  serial
test('Part 27 Homepage Test', { tag: ['@26To30', '@21To30'] }, async ({ page }) => {

    //Login
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')

    await page.fill('#loginusername', 'markapuram')
    await page.fill('#loginpassword', 'markapuram')
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(1000)


    //Homepage

    const welcometext = page.getByText('Welcome')
    await expect(welcometext).toBeVisible()

    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
    expect(products.length).toBe(9)

    //Logout

    await page.click('#logout2')
    await page.waitForTimeout(2000)
    await page.close()

})


test('Part 27 AddToCart Test', { tag: ['@26To30', '@21To30'] }, async ({ page }) => {

    //Login
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')

    await page.fill('#loginusername', 'markapuram')
    await page.fill('#loginpassword', 'markapuram')
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(1000)


    //Homepage

    const welcometext = page.getByText('Welcome')
    await expect(welcometext).toBeVisible()

    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
    expect(products.length).toBe(9)

    //Add to Cart

    await page.click("//a[normalize-space()='Samsung galaxy s6']")

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    await page.click("//a[normalize-space()='Add to cart']")

    //Logout

    await page.waitForTimeout(2000)
    await page.click('#logout2')
    await page.waitForTimeout(2000)
    await page.close()

})