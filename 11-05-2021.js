// Challenge: 11 (For yesterday, Tuesday, May 11):

// Write a
// function findEven that accepts one parameter, a string.

// The string is formatted as a series of binary numbers, separated by commas.

// Example: "1001101,101,11110101"

// findEven should
// return an array of those numbers in the string that are even, converted to base 10. Hint: base 10 numbers are the numbers you 're used to dealing with. If you'
// re stuck, find out how to convert binary numbers to base 10 numbers

// Example:

//     findEven("10,1011,1000001,111010,101000000");
// // returns [2,58,320]

// findEven("");
// // returns []

// findEven("1011");
// // returns [];

function findEven(string) {
    const arr = string.split(',');
    return arr.filter((value) => parseInt(value, 2) % 2 === 0).map(value => parseInt(value, 2))
}

console.log(findEven('10,1011,1000001,111010,101000000'));