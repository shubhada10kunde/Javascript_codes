const isUpperCase = (char) => {
  //   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //     return true;
  //   }
  //   return false;

  return char === char.toUpperCase();
};

console.log(isUpperCase("S"));
console.log(isUpperCase("s"));
