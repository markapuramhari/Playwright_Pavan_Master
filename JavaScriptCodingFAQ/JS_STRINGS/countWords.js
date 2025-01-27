function countWords(str) {
    
    const words = str.trim().split(/\s+/); 
    return words.length;
}


const inputString = "JavaScript is a powerful programming language.";
const wordCount = countWords(inputString);

console.log(`The number of words in the string is: ${wordCount}`);