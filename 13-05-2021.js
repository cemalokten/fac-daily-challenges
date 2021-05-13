// Challenge: 13 (Thursday, May 13):

// Write a
// function padNumList which accepts two parameters: an array of integers(nums), and an integer(length).
// The
// function padNumList should format each integer in nums to a string of the length length.
// If the number of digits in the integer is less than length, it should be padded with leading zeros.
// If any number in nums has more digits than length, do not pad that number.

//     Example:
//     padNumList([1, 22, 33], 2);
// // returns ["01", "22", "33"]

// padNumList([1, 22, 33], 5);
// // returns ["00001", "00022", "00033"]

// padNumList([1000, 0, 3], 3);
// // returns [1000, 000, 003]

function padNumList(nums, length) {
    return nums.map(num => (num.toString()).padStart(length, 0))
}

const cemal = 0;


console.log(padNumList([1, 22, 33], 5));