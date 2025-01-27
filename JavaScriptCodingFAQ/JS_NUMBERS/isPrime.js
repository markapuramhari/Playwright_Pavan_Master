function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}


const inputNumber = 292;
const result = isPrime(inputNumber);

console.log(`${inputNumber} is ${result ? 'a prime number' : 'not a prime number'}`);