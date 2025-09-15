const arr = [
  "Chu",
  10,
  "Olson",
  20,
  "Chu",
  20,
  "Ryan",
  30,
  40,
  50,
  50,
  true,
  true,
];

// log the arr with duplicates
console.log("Array with duplicates: ", arr);

//create a set and parse in the array as arg

const setArr = new Set(arr);

const newArr = [...setArr]; // use spread operator to copy values stored in the setArr
console.log(newArr);
