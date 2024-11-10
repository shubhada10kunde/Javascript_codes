const countOccurence = (arr) => {
  let count = {};

  for (let element of arr) {
    count[element] = (count[element] || 0) + 1;
  }
  return count;
};

console.log(countOccurence([1, 3, 2, 4, 2, 5, 1, 7]));
