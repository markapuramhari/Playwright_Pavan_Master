function sumOfDigits(number) {
    return number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

const inputNumber = 123456;
const digitSum = sumOfDigits(inputNumber);
console.log(`The sum of the digits in ${inputNumber} is: ${digitSum}`);