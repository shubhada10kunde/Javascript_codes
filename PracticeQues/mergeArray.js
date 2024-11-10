const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeArray([0, 3, 4, 31], [4, 6, 30]));
