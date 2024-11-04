import {test,expect} from '@playwright/test'
test("Mutipule Elements",{tag:['@03To10','@03To05']},async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

// Print Multipule links

    await page.waitForSelector('a')
    const links= await page.$$('a')

    let status=false
    for(const link of links){
        const linktext= await link.textContent()
        console.log('All links: '+linktext)
        if(linktext.includes('Log in')){
            status = true
            break
        }

    }

    await expect(status).toBeTruthy()
    
//Print Products list

    console.log('---------------------------------')

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products){
        const productname= await product.textContent()
        console.log(productname)
        if(productname.includes('Iphone 6 32gb')){
            product.click()
            break
        }
    }

    await expect(await page.getByText('Iphone 6 32gb')).toBeVisible()
    await expect(await page.getByRole('link',{name:'Add to Cart'})).toBeVisible()

    await page.waitForTimeout(3000)
    await page.close()
})