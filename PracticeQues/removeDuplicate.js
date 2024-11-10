const removeDuplicates = (arr) => {
  // let NewArr = new Set(arr);
  // let UniqueArray = [...NewArr];
  // //   console.log(NewArr);
  // return UniqueArray;

  // OR
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
};

console.log(removeDuplicates([1, 2, 3, 2, 3, 5, 6]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));
console.log(removeDuplicates(["a", "b", "c", "b", "a"]));
