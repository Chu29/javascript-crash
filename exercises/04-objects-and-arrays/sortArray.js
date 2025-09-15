"use strict";
const student = [
  {
    id: 0,
    name: "Abuemkeze",
    age: 22,
  },
  {
    id: 1,
    name: "Dave",
    age: 23,
  },
  {
    id: 2,
    name: "Vincent",
    age: 21,
  },
  {
    id: 3,
    name: "Emma",
    age: 47,
  },
];

const sorted = student.sort((asc, desc) => asc.age - desc.age);
console.log(sorted);
