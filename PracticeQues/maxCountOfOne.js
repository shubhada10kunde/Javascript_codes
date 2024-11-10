// max count of consecutive one's
function calculateMaxCountOfOne(arr) {
  let count = 0;
  let MaxCount = 0;

  for (let num of arr) {
    if (num === 1) {
      count++;
      MaxCount = Math.max(MaxCount, count);
    } else {
      count = 0;
    }
  }
  //   console.log(count);
  return MaxCount;
}
console.log(calculateMaxCountOfOne([1, 5, 8, 1, 1, 1, 4, 8, 1, 1]));
