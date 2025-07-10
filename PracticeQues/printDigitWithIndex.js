function printDigitWithIndex(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      result.push(Number(str[i]));
      console.log(`Digit ${str[i]} found at index ${i}`);
    }
  }
  return result;
}

console.log(printDigitWithIndex("iprogrammer13dc9"));
