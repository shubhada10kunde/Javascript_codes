const findMinVal = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[0];

  // OR
  // if(arr.length === 0) return "Array is empty";
  // return Math.min(...arr);
};

console.log(findMinVal([4, 35, 5, 2]));
console.log(findMinVal([-2, 35, -5, 12]));
console.log(findMinVal([]));
