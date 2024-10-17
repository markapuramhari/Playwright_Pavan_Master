//const {test,expect} =require('@playwright/test')
import {test,expect} from '@playwright/test'
test('Loginpage Test',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //await page.locator('id=login2').click() (or)
    await page.click('id=login2')

//username

   // await page.locator('#loginusername').fill('markapuram')  (or)
    await page.fill('#loginusername','markapuram')

//password

    await page.fill('#loginpassword','markapuram')

//click

    await page.click("//button[normalize-space()='Log in']")

 //Validation
 
    const LogOutlink= await page.locator("//a[normalize-space()='Log out']")
    await expect(LogOutlink).toBeVisible()

    const name= await page.locator("//a[@id='nameofuser']")
	await expect(name).toBeVisible()

    await page.waitForTimeout(2000)
    await page.close()
})