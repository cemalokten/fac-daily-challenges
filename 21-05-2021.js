// Challenge 19 (Friday, May 21): 

// Write a function sandwichStrings, which takes one parameter: an array of strings array.

// sandwichStrings should return a string which is constructed from the array elements in the following way:
// Concatenate the first half of each word, until you reach the last word, which is concatenated whole, then concatenate the second half of each word in reverse order.

// Assume the all strings in the array have an even number of letters.

// Example:
// sandwichStrings(['four', 'five', 'longer', 'eleven'])
// returns 'fofilonelevengerveur'

// sandwichStrings(['weat', 'bude', 'pole', 'dawn'])
// returns 'webupodawnledeat'

function sandwichStrings(arr) {
    const str = arr.map((e, i, a) => {
    return (i != (a.length - 1)) ? e.slice(0,(e.length/2)) : e; }).join('');
    arr.reverse().shift();
    return [str,arr.map((e) => e.slice(e.length/2)).join('')].join('');
}