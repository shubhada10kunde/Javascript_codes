const findCombination = (arr, target) => {
  let result = [];
  // find pairs with sum to target
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  // find triplet that sum to the target
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result;
};

console.log(findCombination([1, 3, 2, 4, 0, 2, 1], 4));
