import { test, expect } from '@playwright/test'
test('Part 24 DragAndDrop Test', { tag: ['@21To25', '@21To30'] }, async ({ page }) => {

	await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

	const Oslo = page.locator('#box1')
	const Italy = page.locator('#box106')

	await Oslo.dragTo(Italy)

	await page.waitForTimeout(2000)
	await page.close()
})