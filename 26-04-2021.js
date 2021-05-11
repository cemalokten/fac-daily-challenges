// Challenge 1  (Monday, 26 April):

// Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

// count([1, 2, 3, 4], (e) => e === 3); //expected: 1;
// count([1, 2, 3, 4, 5], (e) => e > 1); // expected: 4;
// count(['a', 'b', 'c', 'e'], (e) => e === 'd'); //expected: 0;

// The goal of this exercise is to practice forEach, but we will accept for loops too

const count = function(arr, callback) {
	let counter = 0;
	arr.forEach((e) => {
		if (callback(e)) {
			counter++;
		}
	});
	return counter;
};

count([ 1, 2, 3, 4 ], (e) => e === 3);
count([ 1, 2, 3, 4, 5 ], (e) => e > 1);
count([ 'a', 'b', 'c', 'e' ], (e) => e === 'd');
