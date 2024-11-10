const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.join("") === arr2.join("")) {
    console.log("Same array");
  } else {
    console.log("Different array");
  }

  // return arr1.every((currval, index) => currval === arr2[index])
  //   ? "Equal Array"
  //   : "Not Equal";
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(isArrayEqual([1, 2, 3], [1, 4, 3]));
console.log(isArrayEqual([], []));
