const num = [10, 11, 12, 13, 14, 15, 16];
const num2 = [10, 21, 11, 45, 28, 195, 134346];
const numbersInString = ["one", "two", "three", "four", "five", "six"];
const words = ["apple", "bat", "nut", "rat", "cat"];

console.log("num before", num); //[10, 11, 12, 13, 14, 15, 16]
console.log("num after", num.sort()); //[10, 11, 12, 13, 14, 15, 16]
console.log("num2 before", num2); //[10, 21, 11, 45, 28, 195, 134346]
console.log("num2 after", num2.sort()); //[10, 11, 134346, 195, 21, 28, 45]
console.log("numbersInString before", numbersInString); //['one', 'two', 'three', 'four', 'five', 'six']
console.log("numbersInString after", numbersInString.sort()); //['five', 'four', 'one', 'six', 'three', 'two']
console.log("words after", words); //['apple', 'bat', 'nut', 'rat', 'cat']
console.log("words after", words.sort()); //['apple', 'bat', 'cat', 'nut', 'rat']
