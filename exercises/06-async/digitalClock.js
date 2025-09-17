const digitalClock = () => {
  const clock = new Date();

  const time = clock.toLocaleTimeString();
  console.log(time);

  setInterval(digitalClock, 1000);
};

digitalClock();
