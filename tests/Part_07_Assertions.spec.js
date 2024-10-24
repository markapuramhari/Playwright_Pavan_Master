/*

1. URL ==> expect(page).toHaveURL('-----')
2. Title ==> expect(page).toHaveTitle('-----')
3. Visible ==> expect(locator).toBeVisible()
4. Enable ==> expect(locator).toBeEnabled()
5. Checked ==> expect(locator).toBeChecked()
6. Attribute ==> expect(locator).toHaveAttribute('attribute','value')
7. Text ==> expect(locator).toHaveText('--------') 
8. ContainText ==> expect(locator).toContainText('-------')
9. value ==> expect(locator).toHaveValue('-----')
10. Count ==> expect(locator).toHaveCount(--)

*/



import {test,expect} from '@playwright/test'
test('All Assertions Test',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

 //1. expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

 //2. expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

//3. expect(locator).toBeVisible()
    const logo= await page.locator('.header-logo')    
    await expect(logo).toBeVisible()
    await expect(await page.getByRole('button',{name:'Register'})).toBeVisible()

//4. expect(locator).toBeEnabled()
    const searchEle= await page.locator('#small-searchterms')
    await expect(searchEle).toBeEnabled()

//5. expect(locator).toBeChecked() //Radio button or check box
    const maleRadioBtn= await page.locator('#gender-male')
    maleRadioBtn.click()
    await expect(maleRadioBtn).toBeChecked();

    const newsletter= await page.locator('#Newsletter')
    await expect(newsletter).toBeChecked()

 //6. expect(locator).toHaveAttribute('attribute','value')
    const RegBtn= await page.locator('#register-button')
    await expect(RegBtn).toHaveAttribute('type','submit')

//7. expect(locator).toHaveText() 
    const Reg= await page.locator('.page-title h1')
    await expect(Reg).toHaveText("Register")

//8.  expect(locator).toContainText()  
    const Reg1= await page.locator('.page-title h1')
    await expect(Reg1).toContainText("egi")

//9. expect(locator).toHaveValue()
    const emailInput= await page.locator('#Email')
    await emailInput.fill('abc@gmail.com')
    await expect(emailInput).toHaveValue('abc@gmail.com')

//10. expect(locator).toHaveCount()
    const options= await page.locator("//select[@name='DateOfBirthMonth']/option")
    await expect(options).toHaveCount(13)
})