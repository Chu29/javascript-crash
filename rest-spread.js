let show = (...params) => {
  console.log(typeof params);
  console.log(params);
};

show(5, 4, 3, 2, 1, "one", true);

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr4 = [1, 2, 3];
let arr5 = [...arr4, 5];

arr4[1] = 4;

console.log(arr4, arr5);
