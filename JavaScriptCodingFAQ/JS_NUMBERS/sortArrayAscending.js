function sortArrayAscending(array) {
    return array.sort((a, b) => a - b); 
}

// Example usage
const inputArray = [34, 12, 5, 8, 67, 23];
const sortedArray = sortArrayAscending(inputArray);

console.log(`Sorted Array in Ascending Order: ${sortedArray}`);