const calculateMedian = (arr) => {
  arr = arr.sort((a, b) => a - b);

  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[mid];
  }
  return (arr[mid - 1] + arr[mid]) / 2;
  //   console.log(mid);
  //   console.log(arr);
};

console.log(calculateMedian([5, 3, 9, 1, 7]));
console.log(calculateMedian([2, 4, 6, 8]));
