const sumOfDigits = (num) => {
  let str = String(num);
  console.log(str);
  let arr = str.split("");
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }
  console.log(sum);

  // OR
  //   let arr = Array.from(String(num), Number);
  //   console.log(arr);
  //   return arr.reduce((accum, currElem) => (accum += currElem), 0);
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(123456));
