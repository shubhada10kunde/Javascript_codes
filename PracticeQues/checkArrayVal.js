const hasSquaredValues = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) return false;
  }
  return true;
};

console.log(hasSquaredValues([1, 4, 2, 5, 3], [1, 16, 4, 25, 9]));
