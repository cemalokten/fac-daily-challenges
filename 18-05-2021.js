// Challenge: 16 (Tuesday, 17 May)

// Write a function which finds and returns the unique elements from two arrays.Your
// function should accept two arrays and
// return an array with the elements which only occur once.If there are no unique elements, the
// function should
// return an empty array.

// Example:

//     uniqueElements([1, 2, 4, 4], [1, 3, 3])

// should
// return

// [2]

// and

// uniqueElements([1, 10, 15, 24, 24], [1, 1, 24, 30])

// should
// return

// [10, 15, 30]


function uniqueElements(a1, a2) {
    const arr = [...a1, ...a2].sort()
    const toDelete = arr.filter((num, i) => arr[i] === arr[i + 1]);
    return arr.filter((num) => !toDelete.includes(num));
}


console.log(uniqueElements([1, 10, 15, 24, 24], [1, 1, 24, 30]));
console.log(uniqueElements([1, 2, 4, 4], [1, 3, 3]));