function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function isStrong(number) {
  const digits = number.toString().split("");
  let sum = 0;
  for (let digit of digits) {
    sum = sum + factorial(Number(digit));
  }
  return sum === number ? "Strong no" : "Not strong no";
}

console.log(isStrong(145));
console.log(isStrong(123));
