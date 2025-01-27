function sumOfArray(array) {
    return array.reduce((sum, num) => sum + num, 0); 
}


const inputArray = [10, 20, 30, 40, 50];
const sum = sumOfArray(inputArray);

console.log(`The sum of the array is: ${sum}`);