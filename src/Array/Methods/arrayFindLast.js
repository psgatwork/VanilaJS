let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// අදාල condition එක සපුරන, Array last element එකේ value එක ලබා දේ
// මෙහිදී, 3ක් අඩු කල විට 2ක් ලැබෙන්නේ අඥාත අගය 5ක් වූ විටය.
let firstValue = num.findLast((x) => x - 3 === 2);
console.log(firstValue); // output 5

// Example 2 - 20ට වැඩි අවසාන අගය සොයන්න
let randomNum = [6, 2, 45, 23, 83, 5];
console.log(randomNum.findLast((x) => x > 20)); //output 83
