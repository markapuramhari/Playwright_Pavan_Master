/*
IMP:
----
1) page.getByAltText()   --> use for images,        DOM==> alt='company-branding'

    const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

2) page.getByPlaceholder() --> use for input box  , DOM==> placeholder='Username'

    await page.getByPlaceholder('Username').fill('Admin')

3) page.getByRole() --> use for button,link,action  DOM==> 'role',{name:'value'}  i.e role: link, button, img, heading

    await page.getByRole('button',{type:'submit'}).click() 

4) page.getByText() --> use for test content only   DOM==> text

    await expect(await page.getByText('Time at Work')).toBeVisible()

----------------------------------------

5) page.getByLabel() --> use <label>                DOM ==> <label>password</label>
6) page.getByTitle() --> use for Title attributes   DOM ==> title='username'
7) page.getByTestId() --> use for data-testid       DOM ==> data-testid='diractions'


getByRole(role: "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" 
    | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" 
    | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" 
    | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" 
    | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" 
    | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" 
    | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" |

*/

import {test,expect} from '@playwright/test'
test("built-in Locators",async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'Login'}).click()  //link, button, img, heading

//Validates 

    const username= await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(username)).toBeVisible()

    await expect(await page.getByText('Time at Work')).toBeVisible()
    await expect(await page.getByText('Time at Work')).toHaveText('Time at Work')
    await expect(await page.getByText('My Actions')).toBeVisible()
    await expect(await page.getByText('Quick Launch')).toBeVisible()
    await expect(await page.getByText('This Week')).toBeVisible()
    await expect(await page.getByText('OrangeHRM OS 5.7')).toBeVisible()

    await page.waitForTimeout(2000)
    await page.close()

})