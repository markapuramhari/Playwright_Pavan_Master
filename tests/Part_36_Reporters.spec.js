import {test,expect} from '@playwright/test'
test('Test1',{tag:'@31To38'},async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')

})
test('Test2',{tag:'@31To38'},async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle('Your Store')

})
test('Test3',{tag:'@31To38'},async({page})=>{

    await page.goto('https://www.opencart.com/')
    await expect(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution')

})