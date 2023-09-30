// Original Array Object එක භාවිතයෙන් String එකක් Array එකක් බවට සැකසීමට from() ට හැකියාව ඇත

let arrayHolder = Array.from(564354); // Expected output [] //From function cannot create array from numbers
console.log("from numbers", arrayHolder);

arrayHolder = Array.from("Magic");
console.log("from strings", arrayHolder); // Expected output ['M', 'a', 'g', 'i', 'c'] // from function creates array from string.

arrayHolder = Array.from([8, 3, 4, 5]); //දැනට තියෙන Array එකකින් අලුත් එකක් හදන්නත් පුලුවන්
console.log("from strings", arrayHolder); // Expected output [8, 3, 4, 5]

arrayHolder = Array.from([8, 3, 4, 5], (x) => x + 2); // දැනට තියෙන Array එකකින් අලුත් එකක් හදන්නත් පුලුවන්
console.log("from strings", arrayHolder); // Expected output [10, 5, 6, 7]
