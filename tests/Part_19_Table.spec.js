import {test,expect} from '@playwright/test'
test('Handling Table',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

//1. total number of columns & rows 
    const table= await page.locator("//table[@id='productTable']")
    const columns= await page.locator("//table[@id='productTable']//th")
    console.log('no of colums: ', await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows= await page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no of rows: ',await rows.count())
    await expect(await rows.count()).toBe(5)


//2. select check box for Smartwatch

  const matchedRow=  rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch',
    })
    await matchedRow.locator('input').check()
    
//3. select multiple products by re-use function


    await selectProduct(rows,page,'Tablet')
    await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'Laptop')
    
   


//4. print all product details using loop same page

    for(let i=0;i<await rows.count();i++){
        const row= rows.nth(i)
        const tds= row.locator('td')

        for(let j=0;j<await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }
    }


 //5. read data from all pages
 
    const pages= await page.locator('.pagination li a')
    const totalpages=await pages.count()
    console.log('totalpages: ',totalpages)


    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click()
        }

        for(let i=0;i<await rows.count();i++){
            const row= rows.nth(i)
            const tds= row.locator('td')
    
            for(let j=0;j<await tds.count()-1;j++){
                console.log(await tds.nth(j).textContent())
            }
        }

        await page.waitForTimeout(2000) 
    }

    await page.waitForTimeout(2000)
    await page.close()

})

 async function selectProduct(rows,page,name){
    const matchedRow=  rows.filter({
        has: page.locator('td'),
        hasText: name,
    })
    await matchedRow.locator('input').check()
}

