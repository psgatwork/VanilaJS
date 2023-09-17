const numbersTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// මෙම inbuilt function එක, integer value එකක් ගෙන ඊට අදාල elemant එක ලබා දේ.
// integer value එක ධන හෝ සෘණ විය හැකිය.

// All elements in numbersTen
console.log("numbersTen", numbersTen);

// 1. range එක ඇතුලේ තියෙන ධන සංඛ්‍යාවක් යෙදූ විට
console.log("numbersTen[4]", numbersTen[4]); // Returns 5
console.log("numbersTen.at(4)", numbersTen.at(4)); // Returns 5

// 2. range එක ඇතුලේ තියෙන සෘණ සංඛ්‍යාවක් යෙදූ විට
console.log("numbersTen[-1]", numbersTen[-2]); // Returns undefined
console.log("numbersTen.at(-1)", numbersTen.at(-1)); // Returns 10
console.log("numbersTen.at(-1)", numbersTen.at(-2)); // Returns 9
console.log("numbersTen.at(-1)", numbersTen.at(-10)); // Returns 1

//  3. range එකෙන් පිට තියෙන ධන සංඛ්‍යාවක් යෙදූ විට
console.log("numbersTen[14]", numbersTen[14]); // Returns undefined
console.log("numbersTen.at(14)", numbersTen.at(14)); // Returns undefined

//  4. range එකෙන් පිට තියෙන සෘණ සංඛ්‍යාවක් යෙදූ විට
console.log("numbersTen[-14]", numbersTen[-14]); // Returns undefined
console.log("numbersTen.at(-14)", numbersTen.at(-14)); // Returns undefined
