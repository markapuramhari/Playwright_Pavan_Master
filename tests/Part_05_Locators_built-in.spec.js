/*
IMP:
----
page.getByAltText()   --> use for images,        DOM==> alt='company-branding'
page.getByPlaceholder() --> use for input box  , DOM==> placeholder='Username'
page.getByRole() --> use for button,link,action  DOM==> 'tag',{attribute:'value'}
page.getByText() --> use for test content only   DOM==> text


page.getByLabel() --> use <label>                DOM ==> <label>password</label>
page.getByTitle() --> use for Title attributes   DOM ==> title='username'
page.getByTestId() --> use for data-testid       DOM ==> data-testid='diractions'

*/

import {test,expect} from '@playwright/test'
test("built-in Locators",async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click()

//Validates 

    const username= await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(username)).toBeVisible()

    await expect(await page.getByText('Time at Work')).toBeVisible()
    await expect(await page.getByText('My Actions')).toBeVisible()
    await expect(await page.getByText('Quick Launch')).toBeVisible()
    await expect(await page.getByText('This Week')).toBeVisible()
    await expect(await page.getByText('Congratulations')).toBeVisible()
    await expect(await page.getByText('OrangeHRM OS 5.7')).toBeVisible()

    await page.waitForTimeout(2000)
    await page.close()

})