let a = 1;
let infinityArray = [];
setInterval(() => {
  let b = a++;
  infinityArray.push(b);
  console.log("a :", b);
}, 10);

setInterval(() => {
  console.log("infinityArray", infinityArray);
}, 5000);
