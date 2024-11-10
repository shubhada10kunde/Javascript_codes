const finfLargestElemInNestedArray = (arr) => {
  newArray = arr.flat(Infinity);
  return Math.max(...newArray);
};

console.log(
  finfLargestElemInNestedArray([
    [3, 4, 58],
    [709, 8, 9, [10, 11]],
    [111, 2],
  ])
);
