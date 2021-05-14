// Challenge: 14 (Friday, May 14):

//     Write a
// function dropRepeats that accepts as an argument an array.
// It should
// return a new array without any consecutively repeating arguments.

// Example
// dropRepeats([1, 1, 2, 3, 3, 2, 1])
// // returns [1, 2, 3, 2, 1]

// dropRepeats(['hi', 'there', 'there', 2, 1, 1, 'hi'])
// // returns ['hi', 'there', 2, 1, 'hi']

// dropRepeats([])
// // returns []

//Solution 1 - Longer using forEach, and pushing values to new Array

function dropRepeats(array) {
    const arr = []
    array.forEach((val, index) => {
        if (val != array[index + 1]) {
            arr.push(val)
        }
    })
    return arr;
}

//Solution 2 - Shorter, using filter and codewar style variable names 😃

function dropRepeats(arr) {
    return arr.filter((v, i, a) => (v != a[i + 1]))
}

console.log(dropRepeats([1, 1, 2, 3, 3, 2, 1]));