function reverseNumber(number) {
   
    const reversed = number.toString().split('').reverse().join('');
    return parseInt(reversed, 10); 
}


const inputNumber = 12345;
const reversedNumber = reverseNumber(inputNumber);

console.log(`The reverse of ${inputNumber} is: ${reversedNumber}`);