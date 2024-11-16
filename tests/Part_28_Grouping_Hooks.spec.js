import {test,expect} from '@playwright/test'
test.describe.configure({mode:'serial'})

test.beforeAll(async()=>{
    console.log('this is before all Hook...')
})
test.afterAll(async()=>{
    console.log('this is after all Hook.....')
})
test.beforeEach(async()=>{
    console.log('this is before Each Hook....')
})
test.afterEach(async()=>{
    console.log('this is after Each Hook.....')
})



test.describe('Group1',()=>{

    test('Test 1',{tag:['@21To30','@26To30']},async()=>{

        console.log('This is Test1')
    })
    
    test('Test 2',{tag:['@21To30','@26To30']},async()=>{
    
        console.log('This is Test2')
    })

})

test.describe('Group 2',()=>{

    test('Test 3',{tag:['@21To30','@26To30']},async()=>{

        console.log('This is Test3')
    })
    
    test('Test 4',{tag:['@21To30','@26To30']},async()=>{
    
        console.log('This is Test4')
    })

})




