function deleteNumberFromArray(array, numberToDelete) {
    
    return array.filter((num) => num !== numberToDelete);
}


const inputArray = [1, 2, 3, 4, 5, 3, 6];
const numberToDelete = 3;
const updatedArray = deleteNumberFromArray(inputArray, numberToDelete);

console.log(`Original Array: ${inputArray}`);
console.log(`Updated Array after deleting ${numberToDelete}: ${updatedArray}`);