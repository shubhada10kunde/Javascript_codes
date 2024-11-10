const flattenNestedArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(
  flattenNestedArray([1, 2, 3, [23, 22, 1, 8], [4, 12, 23, 3, [23, 89]]])
);
