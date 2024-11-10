const isPrime = (num) => {
  // no less than 2 are not prime
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));
console.log(isPrime(10));
