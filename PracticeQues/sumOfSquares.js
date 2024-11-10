const sumOfSquares = (arr) => {
  //   return arr.reduce(
  //     (accum, currElem) => (accum = accum + currElem * currElem),
  //     0
  //   );

  let sum = 0;
  for (let elem of arr) {
    sum = sum + elem * elem;
  }
  return sum;
};

console.log(sumOfSquares([1, 2, 3]));
