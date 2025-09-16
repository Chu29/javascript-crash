"use strict";
const student = [
  {
    id: 1,
    name: "Abuemkeze",
    age: 22,
  },
  {
    id: 0,
    name: "Dave",
    age: 23,
  },
  {
    id: 3,
    name: "Vincent",
    age: 21,
  },
  {
    id: 2,
    name: "Emma",
    age: 47,
  },
  {
    id: 4,
    name: "Blessing",
    age: 19,
  },
];

const sorted = student.sort((asc, desc) => asc.name.localeCompare(desc.name));
console.log("Sorted Array: => ", sorted);
