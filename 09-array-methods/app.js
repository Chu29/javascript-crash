"use strict";

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

console.log(characters);

//***ARRAY.FILTER()***
//Get characters with mass greater than 100
const greater100Characters = characters.filter((character) => {
  return character.mass > 100;
});
console.log(greater100Characters);
//Get characters with height less than 200
const shorterCharacters = characters.filter((character) => {
  return character.height < 200;
});
console.log(shorterCharacters);
//Get all male characters
const getMaleCharacters = characters.filter((character) => {
  return character.gender === "male";
});
console.log(getMaleCharacters);
//Get all female characters
const getFemaleCharacters = characters.filter((character) => {
  return character.gender === "female";
});
console.log(getFemaleCharacters);
