const calculateMean = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.reduce((accum, currElem) => accum + currElem, 0);
  //   console.log(sum / arr.length);
  return sum / arr.length;
};

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([10, 20, 30]));
console.log(calculateMean([]));
