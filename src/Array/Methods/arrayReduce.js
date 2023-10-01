const num = [11, 12, 13, 14];

// මෙහිදී  මුල සිට අවසානය දක්වා අගයන් සැලකීම සිදුවේ
// 0 + 11 + 12 + 13 + 14
const initialValue = 0;
const sumWithInitial = num.reduce((accumulator, currentValue) => {
  console.log("accumulator", accumulator);
  console.log("currentValue", currentValue);
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);
// Expected output: 10
