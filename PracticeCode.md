Terminal:
---------

npx playwright test --grep=@03To10 --grep='@03To10 | @11To20' --grep-invert=@11To20 --headed --project='Google Chrome' --project='Microsoft Edge' --workers=4 --reporter=html --retries=1 --last-failed --fail-on-flaky-tests --timeout=40000 --trace=retain-on-failure --debug --ui

=========================================================================================

Features of Playwright:
-----------------------

00. Websocket protocol : two-way communication between a web browser and a web server
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

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 03 Homepage Test',{tag:['@03To05','@03To10']},async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')
	
	const pageURL=await page.url()
	console.log('pageURL: ',pageURL)
	await expect(await page).toHaveURL('https://www.demoblaze.com/index.html')
	
	const pageTitle= await page.title()
	console.log('pageTitle: ',pageTitle)
	await expect(await page).toHaveTitle('STORE')

	await expect(await page.getByRole('link',{name:'Log in'})).toBeVisible()
	
	await page.waitForTimeout(2000)
	await page.close()
})
 
=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 04 Loginpage Test',{tag:['@03To05','@03To10']},async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')
	
	await page.getByRole('link',{name:'Log in'}).click()
	await page.fill('#loginusername','markapuram')
	await page.fill('#loginpassword','markapuram')
	await page.getByRole('button',{name:'Log in'}).click()
	await page.getByRole('link',{name:'Log out'}).click()
	
	await expect(await page.getByRole('link',{name:'Log in'})).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 04 Links and Products Test',{tag:['@03To10','@03To05']},async({page})=>{

	await page.goto('https://www.demoblaze.com/index.html')

//Links
	
	await page.waitForSelector('a')
	const links= await page.$$('a')
	
		let flag=false
		for(const link of links){
			const textLinks=await link.textContent()
			console.log('textLinks: ',textLinks)

			if(textLinks.includes('Log in')){
				flag=true
				break
			}
		}
	await expect(flag).toBeTruthy()
	
//Products

	await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
	const products=await page.$$("//div[@id='tbodyid']//div/h4/a")
	
		for(const product of products){
			const textProduct=await product.textContent()
			console.log('textProduct: ',textProduct)

			if(textProduct.includes('Sony vaio i5')){
				await product.click()
				break

			}		
		}

	await expect(await page.getByRole('heading',{name:'Sony vaio i5'})).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 05 Built-in Locators Test',{tag:['@03To05','@03To10']},async({page})=>{

	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	
	await expect(await page.getByAltText('company-branding')).toBeVisible()
	await page.getByPlaceholder('Username').fill('Admin')
	await page.getByPlaceholder('Password').fill('admin123')
	await page.getByRole('button',{name:'Login'}).click()

	await expect(await page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
	
	await page.click('.oxd-userdropdown-name')
	await expect(await page.getByText('Logout')).toBeVisible()
	await expect(await page.getByText('Logout')).toHaveText('Logout')
	await page.getByText('Logout').click()

	await expect(await page.getByAltText('company-branding')).toBeVisible()
	
	await page.waitForTimeout(2000)
	await page.close()
})

=============================================================================================
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
test('Part 07 Assertions Test',{tag:['@03To10']},async({page})=>{

	await page.goto('https://demo.nopcommerce.com/register')
	
//URL
	await expect(await page).toHaveURL('https://demo.nopcommerce.com/register')
	
//Title
	await expect(await page).toHaveTitle('nopCommerce demo store. Register')
	
//Visible
	await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible()
	
//Enabled
	await expect(await page.getByRole('button',{name:'SEARCH'})).toBeEnabled()
	
//Checked
	await expect(await page.locator('#Newsletter')).toBeChecked()
	
//Attribute
	await expect(await page.locator('#register-button')).toHaveAttribute('name','register-button')
	
//Text
	await expect(await page.getByText('Your Password')).toHaveText('Your Password')
	
//ContainText
	await expect(await page.getByText('Your Password')).toContainText('Password')
	
//Value
	const val= await page.locator('#Company')
	val.fill('Hari')
	await expect(await val).toHaveValue('Hari')
	
//Count
	const count=await page.$$('a')
	await expect(count.length).toBe(61)
	
	await page.waitForTimeout(2000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 10 Checkboxes Test',{tag:['@03To10']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	const checkboxes=["//input[@id='monday']","//input[@id='sunday']","//input[@id='friday']"]
	
	for(const check of checkboxes){
		await page.locator(check).check()
	}
	
	await page.waitForTimeout(2000)

	for(const check of checkboxes){
		await page.locator(check).uncheck()
	}
	
	await page.waitForTimeout(2000)
	await page.close()
})

========================================================================================
import {test,expect} from '@playwright/test'
test('Part 11 Dropdown Test',{tag:['@11To15','@11To20']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	
	await page.selectOption("#country",'India')
	await page.selectOption("#country",{label:'India'})
	await page.selectOption('#country',{value:'uk'})
	await page.selectOption('#country',{index:6})
	
	const options= await page.$$("//select[@id='country']/option")
	
	await expect(await options.length).toBe(10)
	
	let flag=false
	for(const option of  options){
		const textOptions=await option.textContent()
		console.log('textOptions: ',textOptions)

		if(textOptions.includes('India')){
			flag=true
			break
		}
	}
	await expect(flag).toBeTruthy()
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import{test,expect} from '@playwright/test'
test('Part 12 Multi Select Dropdown Test',{tag:['@11To15','@11To20']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	await page.selectOption('#colors',['Red','Blue','Green'])
	
	const options= await page.$$("//select[@id='colors']/option")
	await expect(await options.length).toBe(7)
	
		let flag=false
		for(const option of options){
			const text=await option.textContent()
			console.log('text: ',text)

			if(text.includes('Green')){
				flag=true
				break
			}
		}
		await expect(flag).toBeTruthy()
		
		await page.waitForTimeout(2000)
		await page.close()
})
=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 13 Bootstrap DropDown Test',{tag:['@10To20','@10To15']},async({page})=>{

	await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
	
	await page.click('.multiselect-selected-text')
	
	const count= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//input")
	await expect(await count.length).toBe(11)
	
	await page.waitForSelector("//ul[@class='multiselect-container dropdown-menu']/li//label")
	const options= await page.$$("//ul[@class='multiselect-container dropdown-menu']/li//label")
	
	for(const option of options){
		const text=await option.textContent()
		console.log('text: ',text)

		if(text.includes('Java') || text.includes('C#') || text.includes('MySQL')){
			await option.check()
		}
	}
	
	await page.waitForTimeout(3000)
	
	for(const option of options){
		const text=await option.textContent()
		console.log('text: ',text)

		if(text.includes('HTML') || text.includes('CSS') || text.includes('C#')){
			await option.uncheck()
		}
	}
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 14 Google Search',{tag:['@11To20','@11To15']},async({page})=>{
	await page.goto('https://www.google.com/')
	
	await page.fill("#APjFqb","playwright")
	
	await page.waitForSelector("//div[@class='wM6W7d']/span")
	const options= await page.$$("//div[@class='wM6W7d']/span")

	for(const option of options) {
		 const text=await option.textContent()
		 console.log('text: ',text)

		 if(text.includes('playwright vs selenium')){
			await option.click()
			break
		 }
	}

	await page.waitForTimeout(2000)
	await page.close()
})
 
=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 15 Hidden Dropdown Test',{tag:['@10To15','@10To20']},async({page})=>{

	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	
	await page.getByPlaceholder('Username').fill('Admin')
	await page.getByPlaceholder('Password').fill('admin123')
	await page.getByRole('button',{name:'Login'}).click()
	await page.getByText('PIM').click()
	await page.click("(//div[@class='oxd-select-text-input'])[3]")
	
    await page.waitForSelector("//div[@role='listbox']//span")
	const options= await page.$$("//div[@role='listbox']//span")
	
	for(const option of options){
		const text=await option.textContent()
		console.log('text: ',text)

		if(text.includes('Social Media Marketer')){
			await option.click()
			break
		}
	}
	await page.waitForTimeout(3000)
	await page.close()
})

============================================================================================
import {test,expect} from '@playwright/test'
test('Part 16 alert Test',{tag:['@10To20','@16To20']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	page.on('dialog',async dialog=>{
		expect(dialog.type()).toContain('alert')
		expect(dialog.message()).toContain('I am an alert box!')
		await dialog.accept()
	})

	await page.click('#alertBtn')

	await page.waitForTimeout(2000)
	await page.close()	
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 16 confirm Test',{tag:['@10To20','@16To20']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	page.on('dialog',async dialog=>{
		expect(dialog.type()).toContain('confirm')
		expect(dialog.message()).toContain('Press a button!')

	//await dialog.accept()
	await dialog.dismiss()
	})
	
	await page.click('#confirmBtn')
	await expect(await page.locator('#demo')).toHaveText('You pressed Cancel!')
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 16 prompt Test',{tag:['@10To20','@16To20']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	page.on('dialog',async dialog=>{
	
		expect(dialog.type()).toContain('prompt')
		expect(dialog.message()).toContain('Please enter your name:')
		expect(dialog.defaultValue()).toContain('Harry Potter')
		await dialog.accept('HARI')
	})
	
	await page.click('#promptBtn')
	await expect(await page.locator('#demo')).toContainText('HARI')
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 17 Frames Test',{tag:['@11To20','@16To20']},async({page})=>{

	await page.goto('https://ui.vision/demo/webtest/frames/')
	
	const count=await page.frames()
	console.log('count: ',count.length)
	await expect(await count.length).toBe(7)
	
	const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
	frame1.fill("//input[@name='mytext1']",'1')
	await page.waitForTimeout(1000)
	
	const frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
	frame2.fill("//input[@name='mytext2']",'2')
	await page.waitForTimeout(1000)
	
	const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
	frame3.fill("//input[@name='mytext3']",'3')
	await page.waitForTimeout(1000)
	
	const frame4=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
	frame4.fill("//input[@name='mytext4']",'4')
	await page.waitForTimeout(1000)
	
	const frame5=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})
	frame5.fill("//input[@name='mytext5']",'5')
	
	await page.waitForTimeout(3000)
	await page.close()
	
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 18 Inner Frames Test',{tag:['@16To20','@10To20']},async({page})=>{

	await page.goto('https://ui.vision/demo/webtest/frames/')
	
	const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
	frame3.fill("input[name='mytext3']",'3')
	
	const childFrames=frame3.childFrames()
	console.log('childFrames: ',childFrames.length)

	await childFrames[0].click('.vd3tt')
	
	await page.waitForTimeout(3000)
	await page.close()

})

=============================================================================================
Part 19 Table

=============================================================================================

Part 20 DatePicker 

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 21 Mouse hover Test',{tag:['@21To30','@21To25']},async({page})=>{
	
	await page.goto('https://demo.opencart.com/')
	
	const desktop=await page.getByRole('link',{name:'Desktops'})
	const mac=await page.getByRole('link',{name:'Mac (1)'})
	
	await desktop.hover()
	await mac.hover()
	await mac.click()
	
	//await expect(await page.getByRole('link',{name:'iMac'})).toBeVisible()
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 22 Right Click Test',{tag:['@21To30','@21To25']},async({page})=>{

	await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
	
	const rightClick= await page.locator('.context-menu-one')
	await rightClick.click({button:'right'})
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 23 DBL click Test',{tag:['@21To25','@21To30']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/#')
	const button=await page.getByRole('button',{name:'Copy Text'})
	await button.dblclick()
	
	await expect(await page.locator('#field2')).toHaveValue('Hello World!')

	await page.waitForTimeout(3000)
	await page.close()
})
 
=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 24 DragAndDrop Test',{tag:['@21To25','@21To30']},async({page})=>{

	await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
	
	const Oslo= await page.locator('#box1')
	const Italy= await page.locator('#box106')
	
	await Oslo.dragTo(Italy)
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 25 Keyboard Actions Test',{tag:['@21To25','@21To30']},async({page})=>{

	await page.goto('https://gotranscript.com/text-compare')
	
	await page.getByPlaceholder('Paste one version of the text here.').fill('HARI')
	
	await page.keyboard.press('Control+A')
	await page.keyboard.press('Control+C')
	await page.keyboard.down('Tab')
	await page.keyboard.up('Tab')
	await page.keyboard.press('Control+V')
	
	const exp= await page.getByPlaceholder('Paste another version of the text here.')

	await expect(await exp).toHaveValue('HARI')

	//await page.click('#recaptcha')

	await expect(await page.getByText('Free online text compare tool')).toHaveText('Free online text compare tool')
	await expect(await page.getByText('Free online text compare tool')).toContainText('compare tool')

	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect} from '@playwright/test'
test('Part 26 Upload Files Test',{tag:['@26To30','@21To30']},async({page})=>{

	await page.goto('https://testautomationpractice.blogspot.com/')
	
	await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/index.html')
	await page.getByRole('button',{name:'Upload Single File'}).click()
	
	await expect(await page.locator('#singleFileStatus')).toContainText('index.html')

	await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadFiles/index.html','tests/uploadFiles/index1.html'])
	await page.getByRole('button',{name:'Upload Multiple Files'}).click()

	await expect(await page.locator('#multipleFilesStatus')).toContainText('Multiple files selected:')
	await expect(await page.locator('#multipleFilesStatus')).toContainText('index.html')
	await expect(await page.locator('#multipleFilesStatus')).toContainText('index1.html')
	
	await page.waitForTimeout(3000)
	await page.close()
})

=============================================================================================
import {test,expect,chromium} from '@playwright/test'
test('Part 35 WindowHandling 2 Tabs Test',async()=>{

	const browser= await chromium.launch()
	const context=await browser.newContext()
	const page1=await context.newPage()
	const page2=await context.newPage()
	
	page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	await expect(page1).toHaveTitle('OrangeHRM')
	
	page2.goto('https://www.demoblaze.com/')
	await expect(page2).toHaveTitle('STORE')
	
	await page1.waitForTimeout(2000)
	await page2.waitForTimeout(2000)
	await page1.close()
	await page2.close()
})

=============================================================================================
import {test,expect,chromium} from '@playwright/test'
test('Part 35 Window Handling 1 Tab Test',async()=>{

	const browser= await chromium.launch()
    const context= await browser.newContext()
    const page1= await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
    const pagePromise= context.waitForEvent('page')
    const page2=await pagePromise
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')
    const text= await page2.locator("//div[@class='homepage-slider-content']/h1")
    await expect(await text).toContainText('clicks away!')

   
    await page2.click("//img[@alt='linkedin logo']")
    const pagePromisee= context.waitForEvent('page')
    const page3=await pagePromisee
    const LinkedIntext=page3.locator('.authwall-join-form__title')
    await expect(await LinkedIntext).toContainText('LinkedIn')
    console.log('LinkedIntext:',await LinkedIntext.textContent())
    await page3.close()

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)
    await page1.close()
    await page2.close()

})

=============================================================================================
