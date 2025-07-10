const calculateAverage = (arr) => {
  let total = arr.reduce((accum, currElem) => accum + currElem, 0);
  // console.log(total);
  return total / arr.length;

  // accum :: accumulator means to gather :: jama karne
};

console.log(calculateAverage([5, 10, 2, 8]));
