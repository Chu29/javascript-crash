// array iterable
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const element of arr) {
  console.log(element);
}
// get the iterator object for the array
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator);

// string iterable
const string = "String";

for (const element of string) {
  console.log(element);
}
// get the iterator object for the string
const strIterator = string[Symbol.iterator]();
console.log(strIterator);

console.log("Symbol.iterator: ", Symbol.iterator);

// using the next() method to check if the iterator is ended.
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());

console.log("\n\n");

function displayEven(arr) {
  let i = 0;
  return {
    next() {
      if (i < arr.length && arr[i] % 2 !== 0) {
        i++;
      }
      return {
        value: i >= arr.length ? undefined : arr[i],
        done: i++ >= arr.length ? true : false,
      };
    },
  };
}

const eveIterator = displayEven(arr);

console.log(eveIterator.next());
console.log(eveIterator.next());
console.log(eveIterator.next());
console.log(eveIterator.next());
console.log(eveIterator.next());
console.log(eveIterator.next());
