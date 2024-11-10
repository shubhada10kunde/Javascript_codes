const extractNumberFromStr = (str) => {
  let regex = /\d+/g;
  return str.match(regex);
};

console.log(extractNumberFromStr("abc123def456"));
console.log(extractNumberFromStr("no number here"));
console.log(extractNumberFromStr("1a2b3c4d5f"));
console.log(extractNumberFromStr("100, 200 and 300"));
console.log(extractNumberFromStr(""));

// + matches one or more of the preceding token(i.e., digits)
