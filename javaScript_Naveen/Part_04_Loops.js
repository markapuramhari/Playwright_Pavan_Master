for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log('=======================')

let array = [1, 2, 5, 34, 54]

for (let e of array) {
    console.log(e)
}

console.log('=======================')

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
console.log('=======================')


let num = 1
while (num <= 10) {
    console.log(num)
    num++       //num=num+1 or ++num
}

console.log('=======================')

let num1 = 2
while (num1 <= 10) {
    console.log(num1)
    num1 = num1 + 2      //num=num+1 or ++num
}

console.log('=======================')

let n = 11
do {
    console.log(n)
    n = n + 2
}
while (n <= 10)

console.log('=======================')

let number = 20

while (number <= 100) {
    console.log(number)
    if (number % 5 == 0) {
        console.log('number divisable with 5')
        break
    }
    number++
}

console.log('=======================')

const browser = ['chrome', 'firefox', 'edge', 'IE']

for (const e of browser) {
    if (e == 'edge') {
        console.log('Launch Edge Browser')
        break
    }

}

console.log('=======================')

const user = {
    name: 'Hari',
    age: 30,
    city: 'Hyd'
}

for (const key in user) {
    console.log(key + ':' + user[key])
}

console.log('=======================')

for (const element in browser) {
    console.log(element + ':' + browser[element])
}