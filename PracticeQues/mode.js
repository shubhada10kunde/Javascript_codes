// mode of array :: the number that appears most frequently

const findMode = (arr) => {
  let counts = {};
  let maxNum = 0;
  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  console.log(counts);
  return mode;
};

console.log(findMode([1, 2, 3, 3, 1, 4, 3]));
