function removeJunk(str) {
   
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
}


const inputString = "Hello @World! This is a #test.";
const cleanedString = removeJunk(inputString);

console.log(`Original String: ${inputString}`);
console.log(`Cleaned String: ${cleanedString}`);