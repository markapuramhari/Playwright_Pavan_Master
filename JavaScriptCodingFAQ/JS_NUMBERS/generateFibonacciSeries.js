function generateFibonacciSeries(terms) {
    if (terms <= 0) {
        return "Number greater than 0.";
    }

    const fibonacciSeries = [0, 1]; 

    for (let i = 2; i < terms; i++) {
        const nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextTerm);
    }

    return fibonacciSeries.slice(0, terms);  
}


const numberOfTerms = 2;
const fibonacciSeries = generateFibonacciSeries(numberOfTerms);

console.log(`Fibonacci series (${numberOfTerms} terms): ${fibonacciSeries.join(', ')}`);