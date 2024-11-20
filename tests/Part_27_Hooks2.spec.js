import { test, expect } from '@playwright/test'
test.describe.configure({ mode: 'serial' })

let page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')

    await page.fill('#loginusername', 'markapuram')
    await page.fill('#loginpassword', 'markapuram')
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(1000)
})

test.afterAll(async ({ }) => {
    await page.click('#logout2')
    await page.waitForTimeout(2000)
    await page.close()

})



test('Homepage Test', { tag: ['@21To30', '@26To30'] }, async () => {
    //Homepage

    const welcometext = await page.getByText('Welcome')
    await expect(welcometext).toBeVisible()

    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
    await page.waitForTimeout(5000)
})


test('AddToCart Test', { tag: ['@21To30', '@26To30'] }, async () => {
    //Homepage

    const welcometext = await page.getByText('Welcome')
    await expect(welcometext).toBeVisible()

    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    //Add to Cart

    await page.click("//a[normalize-space()='Samsung galaxy s6']")
    await page.click("//a[normalize-space()='Add to cart']")

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    await page.waitForTimeout(5000)

})