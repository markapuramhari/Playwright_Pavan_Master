
function UpperCaseFirstLetterInWord(str) {
    return str
        .split(' ') 
        .map(word => {
            
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' '); 
}


const inputString = "hello world, this is a title case example.";
const titleCasedString = UpperCaseFirstLetterInWord(inputString);

console.log(`Original String: "${inputString}"`);
console.log(`Title Cased String: "${titleCasedString}"`);