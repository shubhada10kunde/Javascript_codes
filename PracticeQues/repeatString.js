const repeatString = (str, repeatNo) => {
  return repeatNo > 0 ? str.repeat(repeatNo) : str;
};

console.log(repeatString("abc", 5));
