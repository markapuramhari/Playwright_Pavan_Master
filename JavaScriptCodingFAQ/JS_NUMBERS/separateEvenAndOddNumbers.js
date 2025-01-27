function separateEvenAndOddNumbers(array) {
    const evenNumbers = array.filter((num) => num % 2 === 0);
    const oddNumbers = array.filter((num) => num % 2 !== 0);

    return { evenNumbers, oddNumbers };
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { evenNumbers, oddNumbers } = separateEvenAndOddNumbers(inputArray);

console.log(`Original Array: ${inputArray}`);
console.log(`Even Numbers: ${evenNumbers}`);
console.log(`Odd Numbers: ${oddNumbers}`);