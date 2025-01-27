function findDuplicates(array) {
    const duplicates = [];
    const seen = new Set();

    for (let i = 0; i < array.length; i++) {
        if (seen.has(array[i])) {
            duplicates.push(array[i]);
        } else {
            seen.add(array[i]);
        }
    }

    return duplicates;
}


const inputArray = ['a','w','a','e','r','e'];
const duplicateElements = findDuplicates(inputArray);

console.log(`Duplicate elements in the array are: ${duplicateElements}`);