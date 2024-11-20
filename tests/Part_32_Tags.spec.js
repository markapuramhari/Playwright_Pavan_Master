import { test } from '@playwright/test'
test.describe.configure({ mode: 'parallel' })
test('Tags Test1', { tag: '@31To38' }, async () => {

    console.log('this is Test1...')

})
test('Tags Test2', { tag: '@31To38' }, async () => {

    console.log('this is Test2....')

})
test('Tags Test3', { tag: '@31To38' }, async () => {

    console.log('this is Test3...')

})
test('Tags Test4', { tag: '@31To38' }, async () => {

    console.log('this is Test4....')

})
test('Tags Test5', { tag: '@31To38' }, async () => {

    console.log('this is Test5....')

})

//--grep reg