const num = [11, 12, 13, 14];

// මෙහිදී අවසානයේ සිට මුල දක්වා අගයන් සැලකීම සිදුවේ
// 0 + 14 + 13 + 12 + 11
const initialValue = 0;
const sumWithInitial = num.reduceRight((accumulator, currentValue) => {
  console.log("accumulator", accumulator);
  console.log("currentValue", currentValue);
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);
// Expected output: 10
