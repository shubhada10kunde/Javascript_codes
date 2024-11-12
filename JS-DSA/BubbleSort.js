function BubbleSort(arr) {
  let n = arr.length;
  let swapped = undefined;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    //   inner loop to compare adjacent element
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap if current element is greater than the next
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    //If no two elements were swapped, the array is sorted
    if (!swapped) break;
  }
  return arr;
}

console.log(BubbleSort([64, 34, 25, 12, 22, 11, 90]));
