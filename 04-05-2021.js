// Challenge :six:  (Tuesday, 4 May):

// So we heard y'all like objects...

// Write a function capitaliseKeys, which takes an object as an argument, and returns a new object with the same key-value pairs as the input object, except all the keys have been capitalised.

// Example:
// capitaliseKeys({ a: 1, b: 2, c: 3 }) //Expected: { A: 1, B: 2, C: 3 }

// capitaliseKeys({ Hello: 'hi' }) //Expected: { HELLO: 'hi' }

// capitaliseKeys({}) //Expected: {}

// Note: your function needs to construct a new object and return the new object, not just mutate the old object that's passed in as an argument.

const capitaliseKeys = function(object) {
	const newObj = {};
	for (const [ key, value ] of Object.entries(object)) {
		const keyUC = key.toUpperCase();
		newObj[keyUC] = value;
	}
	return newObj;
};

//TRIED FOR..IN DIDNT WORK!!! FOR..OF WITH Object.entries(object) works!!

console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
console.log(capitaliseKeys({ Hello: 'hi' })); //Expected: { HELLO: 'hi' });
