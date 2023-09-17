const num = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(num.flat()); // Output [1, 2, 3, 4, [5, 6, [7, 8]]]
console.log(num.flat(2)); // Output [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(num.flat(Infinity)); // Output [1, 2, 3, 4, 5, 6]

// There is a type called Infinity
// It is taken as Infinity when it is larger than 10^309
console.log("Infinity", Infinity);
console.log("Infinity", Math.pow(10, 309));
