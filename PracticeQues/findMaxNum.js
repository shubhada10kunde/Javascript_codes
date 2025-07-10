const findMax = (arr) => {
  //   return Math.max(100, 80, 71, 32,  89); // use Math.max when there are only numbers but if there is array use spread operator to convert array into separate number

  // console.log(...arr);
  // return Math.max(...arr);

  // OR
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([1, 2, 5, 9, 3]));
console.log(findMax([-10, -20, -50, -9, -3]));
console.log(findMax([5]));
