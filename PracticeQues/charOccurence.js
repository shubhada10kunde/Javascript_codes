const countCharOccurence = (str) => {
  newStr = str.toLowerCase();

  const count = {};
  let TotalCount = newStr.split("").forEach((char) => {
    count[char] = (count[char] || 0) + 1;
  });
  return count;
};

console.log(countCharOccurence("Hello Shubhada"));
