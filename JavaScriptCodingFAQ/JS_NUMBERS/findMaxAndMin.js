function findMaxAndMin(array) {
    
    const max = Math.max(...array);
    const min = Math.min(...array);

    return { max, min };
}


const inputArray = [10, 2, 33, 4, 55, 1, -10];
const { max, min } = findMaxAndMin(inputArray);

console.log(`The maximum value is: ${max}`);
console.log(`The minimum value is: ${min}`);