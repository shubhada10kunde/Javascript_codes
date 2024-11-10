const recursiveNumGenerator = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a);
    return recursiveNumGenerator(a + 1, b, arr);
  }
  return arr;
};

console.log(recursiveNumGenerator(0, 5));
console.log(recursiveNumGenerator(3, 7));
console.log(recursiveNumGenerator(-2, 2));
