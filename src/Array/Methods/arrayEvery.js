const dhahayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function greaterThanFive(num) {
  return num > 5;
}

function greaterThanZero(num) {
  return num > 0;
}

// මේකෙදි වෙන්නේ, ඔය කියල තියෙන array එකේ හැම element එකක්ම
// ඔය කියල තියෙන function එකට දාල එන output එකේ ඔක්කොම true ආවොත්, true කියල output එක එනව.
// හැබැයි එකක් හරි false උනොත් false කියල තමයි output එක එන්නෙ.
console.log(dhahayata.every(greaterThanFive)); //prints "False"
console.log(dhahayata.every(greaterThanZero)); //prints "True"
