// Challenge 18 (Thursday, May 20): 

// Write a function squareDigits that accepts one parameters n, a number.

// Return the number that results from concatenating the square of every digit of n

// Example:
// squareDigits(10)// returns 10

// squareDigits(22) // returns 44

// squareDigits(95) // returns 8125

function squareDigits(n) {
    const arr = n.toString().split('');
    return arr.map(a => Math.pow(Number(a), 2)).join('');
}