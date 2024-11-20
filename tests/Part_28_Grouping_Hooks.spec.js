import { test } from '@playwright/test'
test.describe.configure({ mode: 'serial' })

test.beforeAll(async () => {
    console.log('this is before all Hook...')
})
test.afterAll(async () => {
    console.log('this is after all Hook.....')
})
test.beforeEach(async () => {
    console.log('this is before Each Hook....')
})
test.afterEach(async () => {
    console.log('this is after Each Hook.....')
})



test.describe('Group1', () => {

    test('Part 28 Test 1', { tag: ['@26To30', '@21To30'] }, async () => {

        console.log('This is Test1')
    })

    test('Part 28 Test 2', { tag: ['@26To30', '@21To30'] }, async () => {

        console.log('This is Test2')
    })

})

test.describe('Group 2', () => {

    test('Part 28 Test 3', { tag: ['@26To30', '@21To30'] }, async () => {

        console.log('This is Test3')
    })

    test('Part 28 Test 4', { tag: ['@26To30', '@21To30'] }, async () => {

        console.log('This is Test4')
    })

})




