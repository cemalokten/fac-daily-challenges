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
