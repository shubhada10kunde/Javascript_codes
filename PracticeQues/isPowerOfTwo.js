const isPowerOfTwo = (num) => {
  let output = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      output = true;
    }
  }
  return output;
};

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
