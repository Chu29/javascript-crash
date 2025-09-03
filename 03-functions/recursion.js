// create a count down function
function countDown(n) {
  console.log(n);
  if (n <= 0) {
    return true
  }
  countDown(n-1);
}
countDown(5)

console.log('\nFactorial Function Now');

// factorial
function factorial(x) {
  if(x > 1){
    return x * factorial(x - 1);
  } else {
    return 1;
  }
}

let fact = factorial(5)
console.log(fact);

