import { test, expect } from '@playwright/test'
//JSON --> String -->JS Object
const testdata = JSON.parse(JSON.stringify(require('../testdata/LoginTestData.json')))


for (const data of testdata) {

    test(`Part 39 DDT JSON Loginpage Test ${data.id}`, { tag: ['@39To40'] }, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/index.html')

        await page.getByRole('link', { name: 'Log in' }).click()
        await page.fill('#loginusername', data.username)
        await page.fill('#loginpassword', data.password)
        await page.getByRole('button', { name: 'Log in' }).click()
        await page.getByRole('link', { name: 'Log out' }).click()

        await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()

        await page.waitForTimeout(2000)
        await page.close()
    })

}


/*
test.describe("DDT Login using JSON",function(){
    for(const data of testdata){

        test.describe(`DDT Loginpage Test ${ data.id}`,{tag:['@03To05','@03To10']},async()=>{

            test('Login Application',async ({page})=>{

                await page.goto('https://www.demoblaze.com/index.html')
            
                await page.getByRole('link',{name:'Log in'}).click()
                await page.fill('#loginusername',data.username)
                await page.fill('#loginpassword',data.password)
                await page.getByRole('button',{name:'Log in'}).click()
                await page.getByRole('link',{name:'Log out'}).click()
                
                await expect(await page.getByRole('link',{name:'Log in'})).toBeVisible()
            
                await page.waitForTimeout(2000)
                await page.close()
            })
        })
    }
})

*/








