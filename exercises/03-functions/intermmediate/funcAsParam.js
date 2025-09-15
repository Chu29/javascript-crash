"use strict";

const info = (name, age, job) => {
  return `Hello, I am ${name}, a ${age} years old ${job}`;
};

function greet(func) {
  console.log(info("Chu", 22, "Hardware Engineer"));
}

greet(info());
