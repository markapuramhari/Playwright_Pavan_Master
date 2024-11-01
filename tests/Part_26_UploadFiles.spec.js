import {test,expect} from '@playwright/test'

test('Single Upload File',{tag:'@21To30'},async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/index.html')
    await page.click("//button[normalize-space()='Upload Single File']")
    await expect(await page.locator('#singleFileStatus')).toContainText('index.html')
    await page.waitForTimeout(3000)

//Removing file
    await page.reload()
    await page.click("//button[normalize-space()='Upload Single File']")
    await expect(await page.locator('#singleFileStatus')).toHaveText('No file selected.')

    await page.waitForTimeout(3000)
    await page.close()
})





test('Multiple Upload Files',{tag:'@21To30'},async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadFiles/index.html','tests/uploadFiles/index.html'])
    await page.click("//button[normalize-space()='Upload Multiple Files']")
    await expect(await page.locator('#multipleFilesStatus')).toContainText('index.html')
    await expect(await page.locator('#multipleFilesStatus')).toContainText('Multiple files selected')

//Removing files    
    await page.reload()
    await page.click("//button[normalize-space()='Upload Multiple Files']")
    await expect(await page.locator('#multipleFilesStatus')).toHaveText('No files selected.')

    await page.waitForTimeout(5000)
    await page.close()
})