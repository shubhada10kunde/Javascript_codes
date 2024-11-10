// 153 = 1^3 + 5^3 + 3^3 = 153

function isArmstrong(number) {
  const digits = number.toString().split("");
  console.log(digits);
  const NumDigits = digits.length;

  let sum = 0;
  for (let digit of digits) {
    sum = sum + Math.pow(Number(digit), NumDigits);
  }
  return sum === number ? "Armstrong" : "Not armstrong";
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));
