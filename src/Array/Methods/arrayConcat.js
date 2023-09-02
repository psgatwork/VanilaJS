const numbersZeroTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersTenTwenty = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numbersTT = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// මෙයින් තියෙන Arrays වෙනස් කිරීමක් නොකරන අතර අලුත්ම Array එකක් return කරයි.

// 1. concat two simple arrays
let newArray = numbersZeroTen.concat(numbersTenTwenty);
console.log("numbersZeroTen.concat(numbersTenTwenty)", newArray);

// 2. concat multiple arrays
let newArrayAll = numbersZeroTen.concat(numbersTenTwenty.concat(numbersTT));
console.log(
  "numbersZeroTen.concat(numbersTenTwenty.concat(numbersTT))",
  newArrayAll
);

let newArrayAll2 = numbersZeroTen.concat(numbersTenTwenty, numbersTT);
console.log("numbersZeroTen.concat(numbersTenTwenty, numbersTT)", newArrayAll2);
