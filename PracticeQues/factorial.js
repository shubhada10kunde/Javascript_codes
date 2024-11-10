const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    fact = fact * i;
  }
  //   console.log(fact);
  return fact;
};

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
