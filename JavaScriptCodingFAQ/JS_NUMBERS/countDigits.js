function countDigits(number) {
    
    return number.toString().length;
}


const inputNumber = 123456789;
const digitCount = countDigits(inputNumber);
console.log(`The number of digits in ${inputNumber} is: ${digitCount}`);