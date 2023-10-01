const num = [10, 11, 12, 13, 14, 15, 16];

// check atleast one element passes the test
function isEven(number) {
  console.log("isEven number", number);
  return number % 2 === 0;
}

function isGreaterThan20(number) {
  console.log("isGreaterThan20 number", number);
  return number > 20;
}

console.log(num.some(isEven)); // Result true
console.log(num.some(isGreaterThan20)); //Result false
