const fibinacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibinacci(num - 1) + fibinacci(num - 2);
  }
};

console.log(fibinacci(0));
console.log(fibinacci(1));
console.log(fibinacci(2));
console.log(fibinacci(3));
console.log(fibinacci(4));
console.log(fibinacci(5));
