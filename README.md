CMD:
----

npx playwright test --grep=03To10 --grep-invert=11To20 --headed --project='Google Chrome' --project='Microsoft Edge' --workers=4 --reporter=html --retries=1 --last-failed --fail-on-flaky-tests --timeout=40000 --trace=retain-on-failure



Playwright with Javascript tutorial (Pavan SDET-QA):
----------------------------------------------------

1. https://www.youtube.com/watch?v=_TAg4hpdlDU&list=PLFGoYjJG_fqrRjl9Mn0asiAIxmKC1X-N-&pp=iAQB
2. https://github.com/markapuramhari/Playwright_Pavan_Master
3. https://github.com/pavanoltraining/playwrightautomation

Features of Playwright:
-----------------------

01. Free & open source
02. Multi-Browser, Multi-Language
03. Easy setup and configaration
04. Functional, API, Accessibility testing
05. Built-in reports,custom reports
06. CI,CD, Azure pipline,Docker integration
07. Parallel testing
08. Auto wait ,No Flaky tests,Tracing
09. Built-in Assertions
10. Multi tab & multi window support
11. Frames ,Shadow DOM
12. Test Parameter
13. Emulate mobile devies
14. Codegen
15. Playwright inspector, trace viewer
16. Community support
17. Fast execution
18. Headless Mode support
19. API testing
20. Mocha,Jest Frameworks support
21. Debugging
22. High performance

YouTube Videos:
---------------

Part 01: Introduction | Playwright Vs Selenium Vs Cypress
Part 02: Installation
Part 03: How To Create and Run Tests
Part 04: Locating Web Elements | Locators-Property, XPath, CSS
Part 05: Locating Web Elements | Playwright built-in locator methods

Part 06: Record & Play Scripts In Playwright |Test Generator| Codegen
Part 07: Assertions
Part 08: Hard Assertions vs Soft Assertions
Part 09: How to handle Input box & Radio Buttons
Part 10: How to handle Checkboxes

Part 11: How to handle DropDown
Part 12: How to handle Multi Select DropDown
Part 13: How to handle Bootstrap multi select DropDown
Part 14: How to handle Auto Suggest/Auto Complete DropDown
Part 15: How to Handle Hidden Items in DropDown

Part 16: How to Handle Dialogs Or Alerts | alert(),confirm(), prompt()
Part 17: How to Handle Frames/iFrames
Part 18: How to Handle Inner/Nested Frames
Part 19: How to Handle WebTable/Pagination Table
Part 20: How to Handle Date Pickers/Calendars

Part 21: Mouse Hover Action
Part 22: Mouse Right Click/Context Click Action
Part 23: Mouse Double Click Action
Part 24: Mouse Drag And Drop Action
Part 25: Keyboard Actions in Playwright

Part 26: How To upload files in Playwright
Part 27: Hooks - beforeEach, afterEach, beforeAll & afterAll
Part 28: Grouping Tests - Describe Block
Part 29: How to capture Screenshots
Part 30: How to record videos for Tests

Part 31: Trace Viewer
Part 32: How to Tag playwright tests
Part 33: Annotations | Only, Skip,Fail, Fixme & Slow
Part 34: Page Object Model Pattern | POM
Part 35: How To handle Multiple Pages/Windows | Browser Context

Part 36: Reporters | List, Dot, Json, JUnit & HTML Reporters
Part 37: How to Generate Allure Reports
Part 38: How To Retry Failed Test Cases | Retries and Test Flakiness
Part 39: Rest API Testing | HTTP Requests |Get,Post,Put & Delete


CLI Terminal commands:
---------------------

npm init playwright@latest
npm playwright -v

npx playwright test --grep=03To10 --headed --project='Google Chrome' --workers=4 --reporter=html --last-failed --retries=1
npx playwright test --grep=03To10 --headed --project='Google Chrome' --workers=1
npx playwright test
npx playwright test --headed --project='Google Chrome' --grep=sanity --grep-invert=reg
npx playwright test Test.spec.js --headed --project=chromium --ui
npx playwright test a.spec.js --headed --project='Google Chrome' --project='Microsoft Edge' --project='chromium'
npx playwright test Test.spec.js --headed --project=chromium --debug
npx playwright show-report

npx playwright show-trace test-results/Part_31_Tracing-Tracing-test-chromium/trace.zip
npx playwright test Part_32_Tags.spec.js --headed --project=chromium 
npx playwright test Part_32_Tags.spec.js --headed --project=chromium
npx playwright test Part_38_ReTryTest.spec.js --headed --project=chromium --retries=2  

npx playwright codegen
npx playwright codegen -o tests/newtest.spec.js
npx playwright codegen -o tests/newtest.spec.js --target javascript -b chromium
npx playwright codegen  --device "iPhone 13"
npx playwright codegen --viewport-size "1280,720"



Reporters:
----------

1. List ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=list
2. Line ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=line
3. Dot ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=dot
4. HTML ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=html
npx playwright show-report
5. Json ==>
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=json
6. JUnit ==>
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=junit

Thied party Reporters:
-------------------
1. Allure:  

npm i -D @playwright/test allure-playwright
npm install -g allure-commandline --save-dev
reporter: [['allure-playwright',{outputFolder: 'my-allure-results'}]],   //config file

    CLI:
    ----
    allure generate allure-results -o allure-report --clean
    allure open allure-report

2. Monocart
3. Tesults
4. ReportPortal
5. Currents
6. Serenity/JS



==============================================================================================


03To05 
-------

import {test,expect} from '@playwright/test'
test('Part 03 Homepage Test',async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')
	
	const pageURL= await page.url()
	console.log('pageURL: ',pageURL)
	await expect(await page).toHaveURL('https://www.demoblaze.com/index.html')
	
	const pageTitle= await page.title()
	console.log('pageTitle: ',pageTitle)
	await expect(await page).toHaveTitle('STORE')
	
	await expect(await page.getByRole('link',{name:'Log in'})).toBeVisible()
	await expect(await page.getByRole('link',{name:'Sign up'})).toBeVisible()
	
	await page.waitForTimeout(3000)
	await page.close()
})

----------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 04 Loginpage Test',async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')
	
	await page.getByRole('link',{name:'Log in'}).click()
	await page.fill('#loginusername','markapuram')
	await page.fill('#loginpassword','markapuram')
	await page.getByRole('button',{name:'Log in'}).click()
	await page.getByRole('link',{name:'Log out'}).click()
	await expect(await page.getByRole('link',{name:'Log in'})).toBeVisible()
	
	await page.waitForTimeout(3000)
	await page.close()

})


--------------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 04 Links and Products Test',async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')

//Links	

	await page.waitForSelector('a')
	const links=await page.$$('a')
	
	let status=false
	for(const link of links){
		const textLink= await link.textContent()
		console.log('textLink: ',textLink)
		if(textLink.includes('Log in')){
			status=true
			break
		}
	}
	await expect(await status).toBeTruthy()
	
//Products

	await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
	const products= await page.$$("//div[@id='tbodyid']//div/h4/a")

	
	for(const product of products){
	
		const textProduct=await product.textContent()
		console.log('textProduct: ',textProduct)
		if(textProduct.includes('Samsung galaxy s7')){

			await product.click()
			break
		}
	}
	
	await expect(await page.getByRole('heading',{name:'Samsung galaxy s7'})).toBeVisible()
	
	await page.waitForTimeout(3000)
	await page.close()
	
})

---------------------------------------------------------------------------------------------------
import {test,expect} from '@playwright/test'
test('Part 05 Built-in Locators',async({page})=>{

	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	
	await expect(await page.getByAltText('company-branding')).toBeVisible()
	
	await page.getByPlaceholder('Username').fill('Admin')
	await page.getByPlaceholder('Password').fill('admin123')
	await page.getByRole('button',{name:'Login'}).click()
	
	await expect(await page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
	await expect(await page.getByText('Time at Work')).toBeVisible()
	
	await page.click("//p[@class='oxd-userdropdown-name']")
	await page.getByText('Logout').click()
	
	await expect(await page.getByAltText('company-branding')).toBeVisible()
	
	await page.waitForTimeout(3000)
	await page.close()

})

================================================================================================

07To10 ==> ALL TC's COMPLETED
------------------------------
/*

1. URL ==> 
2. Title ==>
3. Visible ==> 
4. Enabled ==> 
5. Checked ==> 
6. Attribute ==> 
7. Text ==> 
8. ContainText ==> 
9. Value ==> 
10. Count ==>

*/

import {test,expect} from '@playwright/test'
test('Part 07 Hard Assertions Test',async({page})=>{


	await page.goto('https://demo.nopcommerce.com/register')
	
//URL

	await expect(await page).toHaveURL('https://demo.nopcommerce.com/register')
	
//Title
	
	await expect(await page).toHaveTitle('nopCommerce demo store. Register')
	
//Visible

	await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible()
	
//Enabled

	const search=await page.getByRole('button',{name:'SEARCH'})
	await expect(search).toBeEnabled()
	
//Checked

	await expect(await page.locator('#Newsletter')).toBeChecked()
	
//Attribute

	await expect(search).toHaveAttribute('type','submit')
	
//Text

	await expect(await page.getByText('Company Details')).toHaveText('Company Details')
	
//ContainText

	await expect(await page.getByText('Company Details')).toContainText('Details')
	
//Value

	const text= await page.getByPlaceholder('Search store')
	text.fill('HARI')
	await expect(await text).toHaveValue('HARI')
	
//Count

	await page.waitForSelector('a')
	const count=await page.$$('a')
	await expect(await count.length).toBe(61)
	
	
	await page.waitForTimeout(3000)
	await page.close()
})

------------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 10 Check boxes Test',async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	const checkboxes=["//input[@id='monday']","//input[@id='wednesday']","//input[@id='friday']"]
	
	
	for(const box of checkboxes){
	
		await page.locator(box).check()
	
	}
	
	await page.waitForTimeout(3000)
	for(const box of checkboxes){
	
		await page.locator(box).uncheck()
	
	}
	
	await page.waitForTimeout(3000)
	await page.close()

})

===============================================================================================

11To15 ==> ALL TC's COMPLETED
------------------------------

import {test,expect} from '@playwright/test'
test('Part 11 DropDown Test',async({page})=>{ 

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	await page.selectOption('#country',{label:'Japan'})
	await page.selectOption('#country',{value:'usa'})
	await page.selectOption('#country','India')
	await page.selectOption('#country',{index:8})
	
//Count

	const options=await page.$$("//select[@id='country']/option")
	await expect(await options.length).toBe(10)

    
//present or not

	let status=false
	for(const option of options){
	
		const textOptions=await option.textContent()
		console.log('textOptions: ',textOptions)
		if(textOptions.includes('Japan')){
		
			status=true
			break
		}
	
	}
	await expect(await status).toBeTruthy()

	
	
	await page.waitForTimeout(3000)
	await page.close()

})

------------------------------------------------------------------------------------------------
import {test,expect} from '@playwright/test'
test('Part 12 Multi Select Dropdown Test',async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	
	await page.selectOption('#animals',['Cat','Deer','Dog','Zebra'])
	
	
//Count

	const options= await page.$$("//select[@id='animals']/option")
	await expect(await options.length).toBe(10)
	
//present or not

	let status=false
	for(const option of options){
	
		const textOptions=await option.textContent()
		console.log('textOptions: ',textOptions)
		if(textOptions.includes('Dog')){
		
			status=true
			//break
		}
	}
	await expect(await status).toBeTruthy()
	
	await page.waitForTimeout(3000)
	await page.close()
	


})

-------------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 13 Bootstarp DropDown Test',async({page})=>{

	await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
	
	await page.click('.multiselect')
	
//Count

	const count= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//input")
	await expect(count.length).toBe(11)
	
//Present or not    
	const options= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//label")
	
	
	for(const option of options){
	
		const textOption= await option.textContent()
		console.log('textOption: ',textOption)
		if(textOption.includes('Java')|| (textOption.includes('Angular'))) {
			await option.click()
		}
	}
	
	await page.waitForTimeout(3000)
	
	for(const option of options){
	
		const textOption= await option.textContent()
		console.log('textOption: ',textOption)
		if(textOption.includes('HTML')|| (textOption.includes('CSS'))) {
			await option.click()
		}
	}
	
	await page.waitForTimeout(3000)
	await page.close()
	

})

----------------------------------------------------------------------------------------------------
import {test,expect} from '@playwright/test'
test('Part 14 Google Search Test',async({page})=>{

	await page.goto('https://www.google.com/')
	
	await page.fill('#APjFqb','Playwright')
	
	await page.waitForSelector("//div[@class='wM6W7d']/span")
	const options= await page.$$("//div[@class='wM6W7d']/span")
	
	
	for(const option of options){
	
		const textOption=await option.textContent()
		console.log('textOption: ',textOption)
		if(textOption.includes('playwright vs selenium')){
		
			await option.click()
            break
		
		}
	}
	
	await page.waitForTimeout(3000)
    await page.close()
	

})

------------------------------------------------------------------------------------------------
import {test,expect} from '@playwright/test'
test('Part 15 Hidden DropDown Test',async({page})=>{

	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	
	await page.getByPlaceholder('Username').fill('Admin')
	await page.getByPlaceholder('Password').fill('admin123')
	await page.getByRole('button',{name:'Login'}).click()
	await page.locator("//span[normalize-space()='PIM']").click()
	await page.click("(//div[@class='oxd-select-text-input'])[3]")
	
	await page.waitForSelector("//div[@role='listbox']//span")
	const options=await page.$$("//div[@role='listbox']//span")
	
	for(const option of options){
		
		const textOption=await option.textContent()
		console.log('textOption: ',textOption)
		if(textOption.includes('HR Manager')){
		
			await option.click()
			break
		}
	}
	
	await page.waitForTimeout(3000)
	await page.close()

})

==================================================================================================

16To20
------

import {test,expect} from '@playwright/test'
test('Part 16 alert ,confirm ,prompt Test',async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	
	// page.on('dialog',async dialog=>{
	// 	expect(dialog.type()).toContain('alert')
	// 	expect(dialog.message()).toContain('I am an alert box!')
	// 	await dialog.accept()
	// })
	// await page.click('#alertBtn')
	
	

	page.on('dialog',async dialog=>{
		expect(dialog.type()).toContain('confirm')
		expect(dialog.message()).toContain('Press a button!')
		//await dialog.accept()
		await dialog.dismiss()
	})
	await page.click('#confirmBtn')
    await expect(await page.locator('#demo')).toHaveText('You pressed Cancel!')
	
	




	// page.on('dialog',async dialog=>{
	// 	expect(dialog.type()).toContain('prompt')
	// 	expect(dialog.message()).toContain('Please enter your name:')
	// 	expect(dialog.defaultValue()).toContain('Harry Potter')
	// 	await dialog.accept('HARI')
	// })
	// await page.click('#promptBtn')
    // await expect(await page.locator('#demo')).toContainText('HARI')
	
	


	await page.waitForTimeout(5000)
	await page.close()

})

--------------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 17 Frames Test',async({page})=>{

	await page.goto('https://ui.vision/demo/webtest/frames/')
	
	const allFrames= await page.frames()
	console.log('allFrames Count: ',allFrames.length)
	
	const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
	frame1.fill("//input[@name='mytext1']",'1')
    await page.waitForTimeout(2000)
	
	const frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
	frame2.fill("//input[@name='mytext2']",'2')
    await page.waitForTimeout(2000)
	
	const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
	frame3.fill("//input[@name='mytext3']",'3')
    await page.waitForTimeout(2000)
	
	const frame4=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
	frame4.fill("//input[@name='mytext4']","4")
    await page.waitForTimeout(2000)
	
	const frame5=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})
	frame5.fill("//input[@name='mytext5']",'5')
	
	
	
	await page.waitForTimeout(2000)
	await page.close()
})

-------------------------------------------------------------------------------------------------

import {test,expect} from '@playwright/test'
test('Part 18 Inner Frames Test',async({page})=>{

	await page.goto('https://ui.vision/demo/webtest/frames/')
	
	const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
	frame3.fill("//input[@name='mytext3']","HARI")
	
	const childFrames= await frame3.childFrames()
    await childFrames[0].locator("//div[@id='i5']/div[3]/div").check()

	await page.waitForTimeout(3000)
	await page.close()
	


})


----------------------------------------------------------------------------------------

