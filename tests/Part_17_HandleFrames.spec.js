import { test, expect } from '@playwright/test'
test('Part 17 Frames Test', { tag: ['@11To20', '@16To20'] }, async ({ page }) => {

	await page.goto('https://ui.vision/demo/webtest/frames/')

	const count = await page.frames()
	console.log('count: ', count.length)
	await expect(await count.length).toBe(7)

	const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
	frame1.fill("//input[@name='mytext1']", '1')
	await page.waitForTimeout(1000)

	const frame2 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_2.html' })
	frame2.fill("//input[@name='mytext2']", '2')
	await page.waitForTimeout(1000)

	const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
	frame3.fill("//input[@name='mytext3']", '3')
	await page.waitForTimeout(1000)

	const frame4 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_4.html' })
	frame4.fill("//input[@name='mytext4']", '4')
	await page.waitForTimeout(1000)

	const frame5 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_5.html' })
	frame5.fill("//input[@name='mytext5']", '5')

	await page.waitForTimeout(2000)
	await page.close()

})