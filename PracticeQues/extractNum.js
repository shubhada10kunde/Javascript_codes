// const extractNumberFromStr = (str) => {
//   let regex = /\d+/g;
//   return str.match(regex);
// };

// console.log(extractNumberFromStr("abc123def456"));
// console.log(extractNumberFromStr("no number here"));
// console.log(extractNumberFromStr("1a2b3c4d5f"));
// console.log(extractNumberFromStr("100, 200 and 300"));
// console.log(extractNumberFromStr(""));

// + matches one or more of the preceding token(i.e., digits)

// ORRRRRR
const extractNumberFromStr = (str) => {
  let result = [];
  let currentNumber = "";

  for (let char of str) {
    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber + char;
    } else if (currentNumber) {
      result.push(Number(currentNumber));
      currentNumber = ""; // Reset for the next number
    }
  }
  if (currentNumber) {
    // Add the last number if there is one
    result.push(Number(currentNumber));
  }
  return result.length > 0 ? result : null;
};

console.log(extractNumberFromStr("abc123def456"));
console.log(extractNumberFromStr("no number here"));
console.log(extractNumberFromStr("1a2b3c4d5f"));
console.log(extractNumberFromStr("100, 200 and 300"));
console.log(extractNumberFromStr(""));
