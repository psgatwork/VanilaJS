const alphabit = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// gets the enumerator or iterator of an array
const enumerator = alphabit.entries();

console.log("enumerator.next().value", enumerator.next().value);
console.log("enumerator.next().value", enumerator.next().value);
console.log("enumerator.next().value", enumerator.next().value);
console.log("enumerator.next().value", enumerator.next().value);
console.log("enumerator.next()", enumerator.next());

////////////// Controll iterator over for loop
console.log("------------------------------------------------");

for (const [index, element] of alphabit.entries()) {
  console.log(index, element);
}
