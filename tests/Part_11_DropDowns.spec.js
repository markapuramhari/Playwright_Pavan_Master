import {test,expect} from '@playwright/test'

test('DropDowns', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

//1.Select option from DropDown using SelectOption

   // await page.locator('#country').selectOption({label:'India'})  //label
   // await page.locator('#country').selectOption('India')    //visible text
    await page.selectOption('#country','India')
    //await page.locator('#country').selectOption({value:'uk'}) //value
   // await page.locator('#country').selectOption({index:1})       // index
 
   
//1. select option from DropDown using loop

/*
const optionsfor= await page.$$("//select[@id='country']/option")

for(const option of optionsfor){
    let value= await option.textContent()

    if(value.includes('France')){
        await page.selectOption('#country',value)
        break
    }
}

*/

//Assertions

//2. Count number of options in DropDown (Approach 01)
    const options= await page.locator("//select[@id='country']/option")
    await expect(options).toHaveCount(10)

//2. Count number of options in DropDown (Approach 02)

    const optionsprint= await page.$$("//select[@id='country']/option")
    console.log('No of options: ',optionsprint.length)
    await expect(optionsprint.length).toBe(10)

//3. check option presence of value or not in DropDown (Approach 01)

    const content= await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy() 


//3. check option presence of value or not in DropDown (Approach 02)

    const optionsDD= await page.$$("//select[@id='country']/option")
    let status=false
    
    for(const option of optionsDD){
        let value= await option.textContent()
        console.log('Country List: ',await option.textContent())
        if(value.includes('India') ){
            status=true
            break 
        }
    }
    expect(status).toBeTruthy()   
   // await page.waitForTimeout(3000);
})