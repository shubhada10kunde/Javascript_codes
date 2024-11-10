const evenNumberArray = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(evenNumberArray([2, 5, 45, 22, 10, 56, 23, 99]));
