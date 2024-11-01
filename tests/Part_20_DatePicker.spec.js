import {test,expect} from '@playwright/test'
test('Date Picker',{tag:'@11To20'},async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

//Approach 1    
     //await page.fill('#datepicker','06/03/2026') if not work will go below Approach


//Approach 2

     const year='2023'
     const month='March'
     const date='30'

    await page.click('#datepicker')

    while(true){
        const currentMonth= await page.locator('.ui-datepicker-month').textContent()
        const currentYear= await page.locator('.ui-datepicker-year').textContent()

        if(currentMonth ==month && currentYear==year){
            break
        }

       // await page.locator(" [title='Next']").click()
        await page.locator("[title='Prev']").click()
    }

//Approach 1 select date with out loop 

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)



//Approach 2 select date with loop   


/*
    const dates= await page.$$('.ui-state-default')

    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click()
            break
        }
    }
*/        

     await page.waitForTimeout(5000)
     await page.close()

})