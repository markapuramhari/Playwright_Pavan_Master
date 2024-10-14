//const {test,expect} =require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')


//Login

    //await page.locator('id=login2').click()
    await page.click('id=login2')


//username

   // await page.locator('#loginusername').fill('markapuram')
    await page.fill('#loginusername','markapuram')

//password

    await page.fill('#loginpassword','markapuram')

//click

    await page.click("//button[normalize-space()='Log in']")

 //verify Logout link
 
    const LogOutlink= await page.locator("//a[normalize-space()='Log out']")
    await expect(LogOutlink).toBeVisible()

    await page.close()



})