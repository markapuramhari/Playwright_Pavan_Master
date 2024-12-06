//1. MAP: create new array based on input

let numbers = [1, 2, 3, 4, 5, 6]

let doubleNumbers = numbers.map((e) => (e * 2))
console.log(doubleNumbers)

let fahTemp = [122, 343, 543, 456, 44, 32]

function fahToCel(fah) {
    return (fah - 32) * (5 / 9)
}

let CelTemp = fahTemp.map(fahToCel)

console.log(CelTemp)

console.log('==========================')

//2. filter: 

let num = [12, 24, 44, 45, 55]

let evenNumber = num.filter((e) => e % 2 == 0)
console.log(evenNumber)


let employee = [
    { name: 'Hari', age: 44, gender: 'male' },
    { name: 'Babu', age: 39, gender: 'female' },
    { name: 'M', age: 18, gender: 'male' },
    { name: 'Siva', age: 22, gender: 'female' },
    { name: 'Krishna', age: 18, gender: 'male' }
]

let femaleEmp = employee.filter((emp) => {
    return emp.gender == 'female' && emp.age > 30
})
console.log(femaleEmp)

console.log('==========================')

//3. reduce:

let sum = numbers.reduce((acc, numb) => acc + numb, 0)
console.log(sum)
let sum1 = num.reduce((acc, numb) => acc + numb, 0)
console.log(sum1)


//MAX number in array

let top = [1, 3, 4, 4, 6, 4, 65, 43, 0, -8, -66]

let maxnum = top.reduce((max, num) => {
    if (num > max) {
        return num
    }
    else {
        return max
    }
}, top[0])

console.log(maxnum)

//MIN number in array

let minnum = top.reduce((min, num) => {
    if (num < min) {
        return num
    }
    else {
        return min
    }
}, top[0])

console.log(minnum)

let cartitems = [
    { name: 'Hari', price: 440 },
    { name: 'Krishna', price: 400 },
    { name: 'Siva', price: 330 },
    { name: 'M', price: 221 },
]

let totalCost = cartitems.reduce((total, item) => total + item.price, 0)
console.log(totalCost)