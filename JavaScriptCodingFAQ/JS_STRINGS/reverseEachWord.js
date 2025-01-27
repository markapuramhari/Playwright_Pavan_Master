function reverseEachWord(str) {
    
    return str.split(' ')
              .map(word => word.split('').reverse().join(''))
              .join(' ');
}


const inputString = "JavaScript is awesome";
const reversedString = reverseEachWord(inputString);

console.log(`Original String: "${inputString}"`);
console.log(`Reversed Words String: "${reversedString}"`);