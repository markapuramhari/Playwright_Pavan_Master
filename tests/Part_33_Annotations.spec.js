import {test,expect} from '@playwright/test'

// only 
test('Annotations Test1',{tag:'@31To38'},async({page})=>{

    console.log('Test1....')

})
test('Annotations Test2',{tag:'@31To38'},async({page})=>{

    console.log('Test2....')

})

//skip


test('Annotations Test3',{tag:'@31To38'},async({page,browserName})=>{

    if(browserName=='chromium'){
        test.skip()
    }
    console.log('Test3....')

})


//Fixme   //Knows bugs 

test('Annotations Test4',{tag:'@31To38'},async({page})=>{

   
    console.log('Test4....')
    test.fixme()

})

//Fail ==> Expected to fail, but passed so FAIL. if both fail that time test case PASS
test('Annotations Test5',{tag:'@31To38'},async({page})=>{

   test.fail() //expect :fail
    console.log('Test5....')
    await expect(1).toBe(2) //actual :fail

})

//if both fail that time test case PASS
test('Annotations Test6',{tag:'@31To38'},async({page,browserName})=>{

    console.log('Test6....')
    if(browserName=='firefox'){ 
        test.fail()
    }
 })

 //slow

 test('Annotations Test7',{tag:'@31To38'},async({page,browserName})=>{

    test.slow() //increase 3 times 
    //(OR)
    test.setTimeout(5000)
    console.log('Test7....')
    await page.goto('https://demo.opencart.com/')
 })



