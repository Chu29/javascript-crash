"use strict";
let cards = [
  [
    "AH",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "JH",
    "QH",
    "KH",
  ],
  [
    "AD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "JD",
    "QD",
    "KD",
  ],
  [
    "AS",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "JS",
    "QS",
    "KS",
  ],
  [
    "AC",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "JC",
    "QC",
    "KC",
  ],
];

// spread the 2D cards array and concat into a 1D array
let cards1D = [].concat(...cards);

const shuffle = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let randNum = Math.floor(Math.random() * (i + 1));
    [arr[randNum], arr[i]] = [arr[i], arr[randNum]];
  }
};

shuffle(cards1D);
console.log(cards1D);
