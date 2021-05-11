// Challenge :eight: (Thursday, May 6):

// Write a function mostCommon.
// mostCommon accepts one argument, an array of integers numbers.
// mostCommon returns the the most commonly occurring integer in the array.
// If more than one number appears the same amount of times, it returns the smallest one

// Examples:
// mostCommon([1, 2, 3, 4, 4, 4, 1]); // expected: 4

// mostCommon([-1, -1, 0, 3, 8, 0]); // expected: -1

// mostCommon([]); // expected undefined

const mostCommon = function(array) {
	const frequency = array.sort().map((val) =>
		array.reduce(
			(acc, curr) =>

					curr === val ? acc + 1 :
					acc,
			0
		)
	);
	return array[
		frequency.indexOf(
			frequency.reduce(
				(acc, curr) =>

						curr > acc ? curr :
						acc
			)
		)
	];
};

console.log(mostCommon([ -1, -1, 0, 3, 8, 0 ]));
