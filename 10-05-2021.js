// stringToObject("") // Expected {}

// stringToObject("a:1,b:2,c:3") //Expected { a: "1", b: "2", c: "3" }

// stringToObject("one:-1,two:hi there,three:what's that?") // Expected { one: "-1", two: "hi there", three: "what's that?" }

const stringToObject = function(string) {
	const array = string.split(',');
	const obj = {};
	if (!string.length == 0) {
		array.forEach((value) => {
			let array = value.split(':');
			obj[array[0]] = array[1];
		});
		return obj;
	} else {
		return obj;
	}
};
console.log(stringToObject(''));
console.log(stringToObject('a:1,b:2,c:3'));
console.log(stringToObject("one:-1,two:hi there,three:what's that?"));
