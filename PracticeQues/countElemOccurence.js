const countOccurence = (arr) => {
  let count = {};
  let MaxCount = 0;
  let MaxElement = arr[0];

  for (let element of arr) {
    count[element] = (count[element] || 0) + 1;

    // print element with max count
    if (count[element] > MaxCount) {
      MaxCount = count[element];
      MaxElement = element;
    }
  }
  console.log("Element with max count:", MaxElement, "::", MaxCount);

  return count;
};

console.log(countOccurence([1, 3, 2, 4, 2, 5, 1, 7]));
