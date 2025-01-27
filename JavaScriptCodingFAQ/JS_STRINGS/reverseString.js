function reverseString(str) {
   
    return str.split('').reverse().join('');
}


const inputString = "Hello, World!";
const reversedString = reverseString(inputString);

console.log(`Original String: "${inputString}"`);
console.log(`Reversed String: "${reversedString}"`);