const FizzBuzz = (startNum, endNum) => {
  let arr = [];
  for (let i = startNum; i <= endNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(FizzBuzz(1, 15));
console.log(FizzBuzz(12, 20));
