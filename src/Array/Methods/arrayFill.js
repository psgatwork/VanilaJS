let dhahayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array එකේ ඔක්කොම elements දීපු value එකෙන් update වේ
console.log(dhahayata.fill(5)); // output [5,5,5,5,5,5,5,5,5,5]
console.log(dhahayata); // output [5,5,5,5,5,5,5,5,5,5]  // array.fill() modifies the original array

// array.fill(vlaue, start)
// සඳහන් කල අගයෙන් startසිට සියල්ලම update වේ
dhahayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(dhahayata.fill(99, 3, 5)); // output  [1, 2, 3, 99, 99, 6, 7, 8, 9, 10]

// array.fill(vlaue, start, end)
// start and end සීමාවේ සඳහන් කල අගයෙන් update වේ
dhahayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(dhahayata.fill(99, 3, 5)); // output  [1, 2, 3, 99, 99, 6, 7, 8, 9, 10]
