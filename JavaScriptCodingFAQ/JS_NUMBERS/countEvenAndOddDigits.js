function countEvenAndOddDigits(number) {
    
    const digits = number.toString().split('');
    let evenCount = 0;
    let oddCount = 0;

   
    digits.forEach((digit) => {
        const num = parseInt(digit, 10); 
        if (num % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    });

    return { evenCount, oddCount };
}


const inputNumber = 123456789;
const result = countEvenAndOddDigits(inputNumber);
console.log(`Even digits: ${result.evenCount}, Odd digits: ${result.oddCount}`);