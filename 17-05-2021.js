// Challenge 15 (Monday, May 17): 

// Write a function printInBox which takes an array of strings.
// printInBox returns undefined.
// printInBox should log each element of the string to the console, with all the words surrounded by a box.
// The box should leave at least 2 spaces between the edge of the box and the longest word.The words should all be left - aligned.

// Example:
//     printInBox(['hello', 'there', 'my', 'friend']);
// Should log:

function printInBox(array) {
    const longestStr = array.reduce((a, c) => (a.length < c.length) ? c.length : a);
    array.forEach(e => {
        e = ('|  ' + e + ' '.repeat(longestStr - (e.length - 2)) + '|')
        console.log(`${e} \n`);
    });
    array.unshift('-'.repeat(longestStr + 4))
    array.push('-'.repeat(longestStr + 4))
}

console.log(printInBox(['hello', 'there', 'my', 'friend']));
