import {test,expect, chromium} from '@playwright/test'
test('Handling pages/Windows no link',async ({})=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()

    const page1= await context.newPage()
    const page2= await context.newPage()

    const allpages=context.pages()
    console.log('no of pages:',allpages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')
    await page1.waitForTimeout(3000)

    await page2.goto('https://www.demoblaze.com/')
    await expect(page2).toHaveTitle('STORE')
    await page2.waitForTimeout(3000)

})

test('Handling Multiple pages/Windows link',async ({})=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()

    const page1= await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise= context.waitForEvent('page')
    await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
    const page2=await pagePromise
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')


    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)



})