const numberRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    // console.log(a);
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));
