function removeWhiteSpaces(str) {
   
    return str.replace(/\s+/g, '');
}


const inputString = "Hello   World!  This is    a  test.";
const cleanedString = removeWhiteSpaces(inputString);

console.log(`Original String: "${inputString}"`);
console.log(`Cleaned String: "${cleanedString}"`);