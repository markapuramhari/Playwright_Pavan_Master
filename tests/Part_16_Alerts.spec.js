import {test,expect} from '@playwright/test'
// alert
// confirm
// prompt


test('Alert with OK',{tag:'@11To20'},async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//Enabling Dilaog window handler
//Alert with OK
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
    })

await page.click('#alertBtn')

await page.waitForTimeout(3000)
await page.close()

})




test('Confirmation Dialog with OK & Cancel',{tag:'@11To20'},async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //Enabling Dilaog window handler
        page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() 
        //await dialog.dismiss()
        })
    
    await page.click('#confirmBtn')
    
    await expect(await page.locator('#demo')).toHaveText('You pressed OK!')
    
    await page.waitForTimeout(5000)
    await page.close()
    
    })






test('Prompt Dialog with Text',{tag:'@11To20'},async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        
        //Enabling Dilaog window handler
            page.on('dialog',async dialog=>{
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')
            expect(dialog.defaultValue()).toContain('Harry Potter')

            await dialog.accept('Hari') 
            //await dialog.dismiss()
            })
        
        await page.click('#promptBtn')
        
        await expect(await page.locator('#demo')).toContainText('Hari')
        
        await page.waitForTimeout(5000)
        await page.close()
        
        })