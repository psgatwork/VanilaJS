let dhahayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getGreaterThanFive(num) {
  if (num > 5) return num;
}

// filter creates new array(shallow copy) with filtered values
// this will execute for each and every elements
const numsGreaterThanFive = dhahayata.filter(getGreaterThanFive);

// output of shallow copy
console.log(numsGreaterThanFive); // output [6,7,8,9,10]
