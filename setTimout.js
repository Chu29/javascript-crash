// setTimeout
const shouldExecute = true;

const greet = (name) => {
  console.log(`Hello ${name}`);
};

// const salutation = greet("Chu");

let timeoutId = setTimeout(greet, 5000, "Mathew");
console.log(timeoutId);

if (!shouldExecute) {
  clearTimeout(timeoutId);
  console.log(timeoutId);
}

let intervalId = setInterval(greet, 2000, "Mathew");
console.log(intervalId);

let count = 0;
let countDownTimer = setInterval(
  (limit) => {
    console.log(limit - count);
    count++;
    if (limit - count < 1) {
      clearInterval(countDownTimer);
    }
  },
  1000,
  10
);
