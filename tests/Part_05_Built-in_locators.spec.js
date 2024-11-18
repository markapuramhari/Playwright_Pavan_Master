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
