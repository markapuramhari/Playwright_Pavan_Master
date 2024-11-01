import {test,expect} from '@playwright/test'
test('Tags Test1',{tag:'@sanity'},{tag:'@31To38'},async({page})=>{

    console.log('this is Test1...')

})
test('Tags Test2',{tag:'@sanity'},{tag:'@31To38'},async({page})=>{

    console.log('this is Test2....')

})
test('Tags Test3',{tag:'@reg'},{tag:'@31To38'},async({page})=>{

    console.log('this is Test3...')

})
test('Tags Test4',{tag:'@reg'},{tag:'@31To38'},async({page})=>{

    console.log('this is Test4....')

})
test('Tags Test5',{tag:['@sanity','@reg']},{tag:'@31To38'},async({page})=>{

    console.log('this is Test5....')

})

//--grep reg