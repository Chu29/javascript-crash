const isPrime = (num) => {
  if (num <= 1) {
    console.log("Invalid: Enter a number greater than 1");
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeInterval = (lower, upper) => {
  const primeNumbers = [];
  for (let i = lower; i <= upper; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};

const primes = isPrimeInterval(0, 100);
console.log(primes);
