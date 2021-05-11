//Challenge 3

// divisible is a function that accepts an array and returns all the values in that array which are divisible by three. Try using a higher order function (e.g. map, reduce...).

// divisible([1, 2, 3, 4]); //expected: [3]
// divisible([1, 3, 6, 13, 15]); //expected: [3, 6, 15]
// divisible([21, 17, 12]); //expected: [21, 12]

const divisible = function(arr, callback) {
	return arr.filter((value) => value % 3 === 0);
};

console.log(divisible([ 21, 17, 12 ]));
console.log(divisible([ 1, 3, 6, 13, 15 ]));
