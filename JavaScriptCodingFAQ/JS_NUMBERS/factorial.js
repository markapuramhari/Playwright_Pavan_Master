function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

const inputNumber = 5;
const factorialResult = factorial(inputNumber);

console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);