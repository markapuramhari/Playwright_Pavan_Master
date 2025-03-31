import { test, expect } from '@playwright/test'
test('Handling Table', { tag: ['@16To20', '@11To20'] }, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/') //https://datatables.net/

    console.log('---total number of columns & rows----------------')

//1. total number of columns & rows 
    const table = page.locator("//table[@id='productTable']")
        const columns = page.locator("//table[@id='productTable']//th")
    console.log('no of colums: ', await columns.count())
    expect(await columns.count()).toBe(4)

        const rows = page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no of rows: ', await rows.count())
    expect(await rows.count()).toBe(5)

    console.log('-----select check box for Smartwatch--------------')

//2. select check box for Smartwatch

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch',
    })
    await matchedRow.locator('input').check()

    console.log('------select multiple products by re-use function-------------')

//3. select multiple products by re-use function


    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Laptop')

    console.log('----print all product details using loop same page---------------')


//4. print all product details using loop SAME page

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }

    console.log('------read data from all pages-------------')
//5. read data from ALL pages

    const pages = page.locator('.pagination li a')
    const totalpages = await pages.count()
    console.log('totalpages: ', totalpages)


    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }
        }

        await page.waitForTimeout(2000)
    }

    await page.waitForTimeout(2000)
    await page.close()

})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name,
    })
    await matchedRow.locator('input').check()
}

