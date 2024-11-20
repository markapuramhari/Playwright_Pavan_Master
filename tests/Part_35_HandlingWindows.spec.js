import { test, expect } from '@playwright/test'
test('Part 35 WindowHandling 2 Tabs Test', async ({ playwright }) => {

    const browser = await playwright.chromium.launch({ channel: 'chrome' })
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto('https://www.demoblaze.com/index.html')
    await expect(page1).toHaveTitle('STORE')

    await page2.goto('https://testautomationpractice.blogspot.com/')
    await expect(page2).toHaveTitle('Automation Testing Practice')

    await page1.waitForTimeout(2000)
    await page1.close()
    await page2.waitForTimeout(2000)
    await page2.close()
})


test('Part 35 Window Handling 1 Tab Test', async ({ playwright }) => {

    test.slow()
    const browser = await playwright.chromium.launch({ channel: 'chrome' })
    const context = await browser.newContext()
    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
    const pagePromise = context.waitForEvent('page')
    
    const page2 = await pagePromise
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')
    const text = page2.locator("//div[@class='homepage-slider-content']/h1")
    await expect(text).toContainText('clicks away!')
    
    await page2.waitForSelector("//img[@alt='linkedin logo']")

    if(await page2.click('#CybotCookiebotDialogBodyButtonAccept')){
        console.log('Cookies cliked')
    }
    
    await page2.click("//img[@alt='linkedin logo']")
    const pagePromisee = context.waitForEvent('page')
    const page3 = await pagePromisee
    const LinkedIntext = page3.locator('.authwall-join-form__title')
    await expect(LinkedIntext).toContainText('LinkedIn')
    console.log('LinkedIntext:', await LinkedIntext.textContent())
    await page3.close()

    await page1.waitForTimeout(2000)
    await page1.close()
    await page2.waitForTimeout(2000)
    await page2.close()

})