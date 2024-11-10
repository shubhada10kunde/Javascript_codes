const CountChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  TotalCount = word.split("").reduce((counter, currChar) => {
    if (currChar === char) {
      counter++;
    }
    return counter;
  }, 0);
  //   console.log(TotalCount);
  return TotalCount;

  console.log(word);
  console.log(char);
};

console.log(CountChar("MissIssippi", "I"));
