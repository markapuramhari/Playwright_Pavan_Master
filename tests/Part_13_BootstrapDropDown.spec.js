import {test,expect} from "@playwright/test"

test('Bootstrap DropDown',{tag:'@11To20'},async ({page})=>{


    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    
    await page.click('.multiselect')

// Count:
    //const options= await page.locator('ul>li label input') 
    const options= await page.locator("//ul[@class='multiselect-container dropdown-menu']/li//input")
    await expect(options).toHaveCount(11)

// Length: (OR)
   // const optionslength= await page.$$('ul>li label input')
    const optionslength= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//input")
    await expect(optionslength.length).toBe(11)


//select Multiple Options 

    await page.waitForSelector("//ul[@class='multiselect-container dropdown-menu']/li//label")
    const optionsFor= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//label")

    for(let option of optionsFor){

        const val= await option.textContent();
        console.log('Values are: ',val)
        if(val.includes('Angular') || val.includes('Java')){
            await option.click()
        }
    }



 //DeSelect Mutiple Options
 
 await page.waitForSelector("//ul[@class='multiselect-container dropdown-menu']/li//label")
 const optionsForD= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//label")

 for(let option of optionsForD){

     const val= await option.textContent();
     console.log('Values are: ',val)
     if(val.includes('HTML') || val.includes('CSS')){
         await option.click()
     }
 }


    await page.waitForTimeout(3000)
    await page.close()
})