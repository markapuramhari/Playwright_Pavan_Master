import {test,expect} from '@playwright/test'

import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'


const records=parse (
    fs.readFileSync(path.join(__dirname,"../testdata/LoginTestData.csv")),{
        columns:true,
        skip_empty_lines:true
    })

test.describe("DDT Login using CSV",function(){

    for(const data of records){

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





