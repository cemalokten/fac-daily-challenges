// Challenge: 17 (Wednesday, May 19):

// Write a function mapObject that takes two parameters: an object obj and a
// function fn.
// mapObject should
// return a new object whose keys are the same as those of obj, and whose values are the result of calling fn with the values of obj.

// Example:
//     mapObject({
//         a: 1,
//         b: 2
//     }, (n) => n + 2);
// // returns { a: 3, b: 4 }

// mapObject({
// greeting: 'hi there, ',
// goodbye: 'see you later, '
// }), (s) => s + 'Yvonne');
// returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne' }

function mapObject(obj, fn) {
    const obj2 = {};
    for (const prop in obj) {
        obj2[prop] = fn(obj[prop])
    }
    return obj2;
}

console.log(mapObject({
    greeting: 'hi there, ',
    goodbye: 'see you later, '
}, (s) => s + 'Yvonne'));