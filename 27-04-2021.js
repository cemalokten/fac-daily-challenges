// Challenge 2 (Tuesday, 27 April): 

// lastWith is a function that takes two arguments: an array and a function.
// lastWith returns the last element of the array for which the function returns true.
// lastWith returns undefined if the function does not return true for any element of the array.

// lastWith([1, 2, 3, 4], (n) => n % 2 === 1); //returns 3
// lastWith([2, 4, 6, 8], (n) => n % 2 === 1); //returns undefined
// lastWith(['hi', 'one', 'two', 'u'], (s) => s.length === 3); //returns 'two'
// lastWith(['hi', 'one', 'two', 'u'], (s) => s.length === 5); //returns undefined

const lastWith = function(array, callback) {
	let result;
	array.map((value) => {
		if (callback(value)) {
			result = value;
		}
	});
	return result;
};

console.log(lastWith([ 1, 2, 3, 4 ], (n) => n % 2 === 1));
console.log(lastWith([ 2, 4, 6, 8 ], (n) => n % 2 === 1));
console.log(lastWith([ 'hi', 'one', 'two', 'u' ], (s) => s.length === 3));
