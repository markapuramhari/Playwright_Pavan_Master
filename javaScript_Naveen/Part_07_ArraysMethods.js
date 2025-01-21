//01. every()  //boolean   all elements satisfy condition

let num = [1, 2, 3, 4, 5, 6]

let flag = num.every((e) => e < 10)
console.log(flag)   //true

console.log('=========================')

//02. some()   //boolean      at least one element satisfy condition

let even = num.some((e) => e % 2 == 0)
console.log(even)   //true

console.log('=========================')

//03. find()   find first element to satisfy condition

let firstEle = num.find((e) => e % 2 == 0)
console.log(firstEle)   //2

console.log('=========================')

//04. indexOf():  to find index of element

let index = num.indexOf(6)
console.log(index)  //5

console.log('=========================')

//05. lastIndexOf()

let products = ['dell', 'macbook', 'hp', 'dell','GS','234JRc','346dgg',654]

let lastIndex = products.lastIndexOf('dell')
console.log(lastIndex)  //3

console.log('=========================')

//06. reverse()

let reverseArray = products.reverse()
console.log(reverseArray)   //[ 'dell', 'hp', 'macbook', 'dell' ]

console.log('=========================')

//07. sort()

let sort = products.sort()
console.log(sort)   //[ 'dell', 'dell', 'hp', 'macbook' ]