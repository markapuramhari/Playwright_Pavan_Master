import {test,expect} from '@playwright/test'
test('Re-Try Test',{tag:'@31To38'},async({page})=>{


    await page.goto('https://www.demoblaze.com/index.html')

    //await page.locator('id=login2').click() (or)
   // await page.click('id=login2') (or)
    await page.getByRole('link',{name:'Log in'}).click()


//username

   // await page.locator('#loginusername').fill('markapuram')  (or)
    await page.fill('#loginusername','markapuram')

//password

    await page.fill('#loginpassword','markapuram')

//click

    //await page.click("//button[normalize-space()='Log in']")
    await page.getByRole('button',{name:'Log in'}).click()

 //Validation
    const LogOutlink= await page.locator("//a[normalize-space()='Log out']")
    await page.waitForTimeout(3000)
    await expect(LogOutlink).toBeVisible()
    await page.close()
})