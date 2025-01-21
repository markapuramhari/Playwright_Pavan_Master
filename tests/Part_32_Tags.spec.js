import { test } from '@playwright/test'
test.describe.configure({ mode: 'parallel' })
test('Part 32 Tags Test1', { tag: ['@31To38'] }, async () => {

    console.log('this is Test1...')

})
test('Part 32 Tags Test2', { tag: ['@31To38'] }, async () => {

    console.log('this is Test2....')

})
test('Part 32 Tags Test3', { tag: ['@31To38'] }, async () => {

    console.log('this is Test3...')

})
test('Part 32 Tags Test4', { tag: ['@31To38'] }, async () => {

    console.log('this is Test4....')

})
test('Part 32 Tags Test5', { tag: ['@31To38'] }, async () => {

    console.log('this is Test5....')

})

//--grep reg