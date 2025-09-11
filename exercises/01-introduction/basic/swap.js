const swap = () => {
  let a = 2;
  let b = 5;
  let temp;
  console.log("Before swap: ", a, b);

  //swap
  temp = a;
  a = b;
  b = temp;
  console.log("After swap: ", a, b);
};

swap();
