import {test,expect} from '@playwright/test'

test('DropDowns', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

//1. Select option from DropDown using SelectOption

   // await page.locator('#country').selectOption({label:'India'})  //label
   // await page.locator('#country').selectOption('India')    //visible text
    //await page.locator('#country').selectOption({value:'uk'}) //value
   // await page.locator('#country').selectOption({index:1})       // index
   await page.selectOption('#country','India') //by visible Text
 
   
//1. Select option from DropDown using loop (OR)

/* not working

const optionsfor= await page.$$("//select[@id='country']/option")

for(const option of optionsfor){
    let selectvalue= await option.textContent()

    if(selectvalue.includes('France')){
        await page.selectOption("//select[@id='country']",selectvalue)
        break;
    }
}

*/



//Assertions

//2. Count number of options in DropDown (Approach 01)
    const options= await page.locator("//select[@id='country']/option")
    await expect(options).toHaveCount(10)

//2. Count number of options in DropDown (Approach 02)

    const optionsarray= await page.$$("//select[@id='country']/option")
    console.log('No of options: ',optionsarray.length)
    await expect(optionsarray.length).toBe(10)


//3. check option presence of value or not in DropDown (Approach 01) Boolean

    const content= await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy() //True


//3. check option presence of value or not in DropDown using looping (Approach 02) Boolean

    const optionsDD= await page.$$("//select[@id='country']/option")

    let status=false
    for(const option of optionsDD){
        let value= await option.textContent()
        console.log('Country List: ',value)
        if(value.includes('France') ){
            status=true
            break 
        }
    }
    expect(status).toBeTruthy()   //true
   // await page.waitForTimeout(3000);

   await page.close()
})