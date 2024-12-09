const array = [1, 2, 3, 2, 3, 2, 5, 6, 2, 7, 7, 7, 7];

// Create an object to store the count of each number
const countMap = {};

// Loop through the array to count occurrences
array.forEach(num => {
  countMap[num] = (countMap[num] || 0) + 1;
});

// Output the counts in the desired format
for (const [key, value] of Object.entries(countMap)) {
  console.log(`${key}=${value}`);
}
