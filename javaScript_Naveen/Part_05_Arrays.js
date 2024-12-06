let myArray = []
let lang = ['Java', 'Python', 'JS', 'C#']


//01. PUSH : Add new elements in END of exsiting array

lang.push('Ruby', '.NET')
console.log(lang) // [ 'Java', 'Python', 'JS', 'C#', 'Ruby', '.NET' ]

console.log('==================================')

//02. POP: Remove LAST element of array

lang.pop()
console.log(lang)  //[ 'Java', 'Python', 'JS', 'C#', 'Ruby' ]

console.log('==================================')

//03. SHIFT: Remove first element and retun first element

const firstEle = lang.shift()
console.log(lang)
console.log(firstEle)

console.log('==================================')

//04. UNSHIFT: Add one of more elements in Begining of an array

lang.unshift('Playwright', 'Selenium')
console.log(lang)
console.log(lang.length)

console.log('==================================')

//05. SPLICE: ADD or REMOVE specific elements based on index in same array

let animals = ['dog', 'cat', 'bird', 'fish', 'goat']

animals.splice(3, 2, 'bear', 'pig')  //index to remove,count to remove, add new elements
console.log(animals)  //[ 'dog', 'cat', 'bird', 'bear', 'pig' ]

console.log('==================================')

//06. SLICE: create new array based on given index

let numbers = [1, 2, 3, 4, 5, 6, 7, 5, 3]
let newNumber = numbers.slice(3, 6)  //exclude last index value

console.log(numbers)
console.log(newNumber) //[ 4, 5, 6 ]

console.log('==================================')

//07.CONCAT: 

let fruts = ['apple', 'banana', 'orang']
let num = [1, 3, 53, 5, 55]

const concatArray = fruts.concat(num)
console.log(concatArray)    //[ 'apple', 'banana', 'orang', 1, 3, 53, 5, 55 ]

console.log('==================================')

//08. indexOf: find index value

let colors = ['blue', 'red', 'green', 'blue', 'black']

let indexofRed = colors.indexOf('blue')
console.log(indexofRed)

//2nd index of blue
let blue2ndIndex = colors.indexOf('blue', colors.indexOf('blue') + 1)
console.log(blue2ndIndex)

console.log('==================================')

//09. includes: 
let test = ['admin', 'user', 'vender']
let flag = test.includes('vender')
console.log(flag)

//10. for each

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

n.forEach((e) => {
    console.log(e * 2)
})