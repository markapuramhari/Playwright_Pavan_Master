import {test,expect} from '@playwright/test'
test('Hidden DropDown',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.click("//button[normalize-space()='Login']")

    //await page.locator("//a[@class='oxd-main-menu-item active']/span").click() not working
    await page.locator("//span[normalize-space()='PIM']").click()

    await page.click('//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]')

    await page.waitForSelector("//div[@role='listbox']//span")
    const options= await page.$$("//div[@role='listbox']//span")



    for(let option of options){
        const jobTitle= await option.textContent()
        console.log('jobTitles: ',jobTitle)
        if(jobTitle.includes('Software Engineer')){
            await option.click()
            break
        }
    }

    await page.waitForTimeout(2000)
    await page.close

})