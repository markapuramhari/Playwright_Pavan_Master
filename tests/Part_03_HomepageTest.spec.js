  const {test, expect}= require('@playwright/test')  // test('HomePageTest',async ({page})=>{})

test('HomePage',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    const pageTitle= await page.title()
    console.log("PageTitle:"+pageTitle)

    const pageURL= await page.url()
    console.log('PageURL'+pageURL)

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    await page.close()

});

