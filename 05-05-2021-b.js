// Challenge :seven: (Wednesday, 5 May):

// Write a function biggest that accepts an array data as an argument. Every element of data is an object with the keys id, price, sqft.

// biggest should return a number, corresponding to the largest value of the price per square meter (m^2) for that object, rounded to the nearest integer.

// Note: The return value is expected to be in square meters (m^2), not square feet (sqft).

// Example:
// const data = [
// 	{
// 		id    : 0,
// 		price : 700000,
// 		sqft  : 7200
// 	},
// 	{
// 		id    : 1,
// 		price : 100000,
// 		sqft  : 200
// 	}
// ];

// biggest(data); //returns 5382;

const data = [
	{
		id    : 1,
		price : 408000,
		sqft  : 200
	},
	{
		id    : 0,
		price : 200000,
		sqft  : 100
	}
];

// biggest(data); //returns 21958;

const biggest = function(data) {
	let largest = 0;
	data.forEach((value) => {
		if (value.price / (value.sqft / 10.764) > largest) {
			largest = value.price / (value.sqft / 10.764);
		}
	});
	return Math.floor(largest);
};

console.log(biggest(data));
