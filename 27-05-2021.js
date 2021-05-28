// Challenge 20 (Thursday, May 27): 

// Write a function interleave that accepts two arrays of the same length.

// interleave should return an array that interleaves the elements of each array, beginning with the first array.

// Example:
// interleave([1, 2, 3], ['a', 'b', 'c'])
// // returns [1, 'a', 2, 'b', 3, 'c']

// interleave([[1, 2], 'a', -1], ['one', -1, null])
// // returns [[1, 2], 'one', 'a', -1, -1, null]

// Last one! We're not expecting anyone to do this tonight, so feel free to save it for later.

function interleave(a1, a2) {
    return new Array(a1.length + a2.length).fill(0).map((e, i) => (i % 2 === 0) ? e = a1.splice(0,1) : e = a2.splice(0,1)).flat()  
}

console.log(interleave([[1, 2], 'a', -1], ['one', -1, null]));