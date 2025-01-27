function searchArray(array, value) {
    const index = array.indexOf(value); 
    if (index !== -1) {
        return `The value "${value}" was found at index ${index}.`;
    } else {
        return `The value "${value}" was not found`;
    }
}


const inputArray = [10, 20, 30, 40, 50];
const valueToSearch = 30;
const result = searchArray(inputArray, valueToSearch);

console.log(result);