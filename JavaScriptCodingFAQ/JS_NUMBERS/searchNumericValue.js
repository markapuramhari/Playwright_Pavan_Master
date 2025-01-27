function searchNumericValue(array, value) {
    const index = array.indexOf(value); 
    if (index !== -1) {
        return `value ${value} index ${index}.`;
    } else {
        return `value ${value} not found `;
    }
}


const inputArray = [10, 20, 30, 40, 50];
const valueToSearch = 301;
const result = searchNumericValue(inputArray, valueToSearch);

console.log(result);