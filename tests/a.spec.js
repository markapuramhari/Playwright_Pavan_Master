import {test,expect,chromium} from '@playwright/test'
test('Handling Multiple pages/Windows 1 page',{tag:'@31To38'},async ({})=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()
    const page1= await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
    const pagePromise= context.waitForEvent('page')
    const page2=await pagePromise
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')
    const text= await page2.locator("//div[@class='homepage-slider-content']/h1")
    await expect(await text).toContainText('clicks away!')

   
    await page2.click("//img[@alt='linkedin logo']")
    const pagePromisee= context.waitForEvent('page')
    const page3=await pagePromisee
    const LinkedIntext=page3.locator('.authwall-join-form__title')
    await expect(await LinkedIntext).toContainText('LinkedIn')
    console.log('LinkedIntext:',await LinkedIntext.textContent())
    await page3.close()

    await page1.waitForTimeout(2000)
    await page2.waitForTimeout(2000)
    await page1.close()
    await page2.close()
})