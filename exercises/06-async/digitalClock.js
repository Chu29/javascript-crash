const endTime = new Date();
const digitalClock = () => {
  const clock = new Date();
  const time = clock.toLocaleTimeString();
  console.log(time);
};

let timeoutID = setInterval(digitalClock, 1000);
if (clock >= endTime) {
  clearTimeout(timeoutID);
}
console.log(timeoutID);
