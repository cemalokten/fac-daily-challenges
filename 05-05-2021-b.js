// Challenge 7.2 (Wednesday, 5 May):

// Write a function biggestArr that accepts an array data as an argument. Every element of data is an object with the keys id, price, sqft.

// biggestArr should return an array with two elements.

// The first element is the id of the object with the highest price / m^2

// The second element is the corresponding value of price / m^2 for that object

// If data is empty, return null

// Example:
// const data = [];
// biggestArr(data) // returns null

// biggestArr(data); //returns [1, 5382];

// const data = [
//    {
//      id: 0,
//      price: 200000,
//      sqft: 100,
//    },
//    {
//      id: 29,
//      price: 408000,
//      sqft: 200,
//    },
//  ];

// biggestArr(data); //returns [29, 21958];

// const data = [
// 	{
// 		id    : 29,
// 		price : 408000,
// 		sqft  : 200
// 	},
// 	{
// 		id    : 0,
// 		price : 200000,
// 		sqft  : 100
// 	}
// ];

// biggestArr(data); //returns 21958;

// const biggestArr = function(data) {
// 	let arr = [];
// 	let id = 0;
// 	let biggest = 0;
// 	if (data.length > 0) {
// 		data.map((value) => {
// 			if (value.price / (value.sqft / 10.764) > biggest) {
// 				biggest = Math.floor(value.price / (value.sqft / 10.764));
// 				id = value.id;
// 			}
// 		});
// 	} else {
// 		return null;
// 	}

// 	return [ id, biggest ];

// 	// let biggest = 0;
// 	// return data.map((value) => {
// 	// 	if (value.price / (value.sqft / 10.764) > biggest) {
// 	// 		biggest = value.price / (value.sqft / 10.764);
// 	// 	}
// 	// });
// };

// console.log(biggestArr(data));

const data = [
	{
		id    : 0,
		price : 200000,
		sqft  : 100
	},
	{
		id    : 29,
		price : 408000,
		sqft  : 200
	}
];

const calcSqM = function(sqFt) {
	return sqFt / 10.764;
};

const biggest = function(data) {
	if (data.length > 0) {
		data.map((value) => {
			value.biggest = value.price / calcSqM(value.sqft);
		});
		const biggest = data.reduce((acc, cur) => {
			return;

				cur.biggest > acc.biggest ? cur.biggest :
				acc.biggest;
		});
		return biggest;
	} else return null;
};

const biggestArr = function(data) {
	let id = 0;
	if (data.length > 0) {
		data.map((value) => {
			id =

					biggest(data) === value.biggest ? value.id :
					null;
		});
		return [ id, Math.floor(biggest(data)) ];
	} else {
		return null;
	}
};

console.log(biggestArr(data));
