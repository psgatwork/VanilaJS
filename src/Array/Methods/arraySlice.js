const num = [10, 11, 12, 13, 14, 15, 16];

// num.slice(start);
console.log(num.slice(0)); // Result [10, 11, 12, 13, 14, 15, 16]
console.log(num.slice(1)); // Result [11, 12, 13, 14, 15, 16]
console.log(num.slice(2)); // Result [12, 13, 14, 15, 16]

// num.slice(start,end);
// if end <= start, result is [] end එක startට වඩා කුඩා හෝ සමාන නම් සෑම විටම ලැබෙන්නේ empty array එකකි.
console.log(num.slice(2, 0)); // Result []
console.log(num.slice(2, 1)); // Result []
console.log(num.slice(2, 2)); // Result []
console.log(num.slice(2, 3)); // Result [12]
console.log(num.slice(2, 4)); // Result [12, 13]
