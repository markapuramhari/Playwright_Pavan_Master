import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'
import { PageManager } from '../pages/pageManager'

test('Part 34 POM test', { tag: ['@31To38'] }, async ({ page }) => {
    //test.slow()

    //without POM
    // await page.goto('https://www.demoblaze.com/index.html')
    // await page.click('#login2')
    // await page.fill('#loginusername','markapuram')
    // await page.fill('#loginpassword','markapuram')
    // await page.click("//button[normalize-space()='Log in']")

    //with POM

    //Loginpage
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('markapuram', 'markapuram')
    await page.waitForTimeout(2000)

    //HomePage    
    const home = new HomePage(page)
    await page.waitForTimeout(2000)
    await home.addProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(2000)
    await home.gotoCart()



    //CartPage

    const cart = new CartPage(page)
    await page.waitForTimeout(2000)
    const status = await cart.checkProductInCart('Samsung galaxy s6')
    expect(status).toBe(true)

    await page.waitForTimeout(3000)

    await page.close()
})


test.skip('Part 34 POM PageManager test', { tag: ['@31To38'] }, async ({ page }) => {
    const pm=new PageManager(page)

    //Loginpage
    await pm.onLoginPage.gotoLoginPage()
    await pm.onLoginPage.login('markapuram', 'markapuram')
    await page.waitForTimeout(2000)

    //HomePage    
    await pm.onHomePage.page.waitForTimeout(2000)
    await pm.onHomePage.addProductToCart('Samsung galaxy s6')
    await pm.onHomePage.page.waitForTimeout(2000)
    await pm.onHomePage.gotoCart()



    //CartPage
    await pm.onCartPage.page.waitForTimeout(2000)
    const status = await pm.onCartPage.checkProductInCart('Samsung galaxy s6')
    expect(status).toBe(true)

    await page.waitForTimeout(3000)

    await page.close()
})