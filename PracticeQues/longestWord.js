const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  console.log(words);

  console.log("Longest word is::");
  return words[0];

  // OR

  //   return words.reduce(
  //     (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
  //     ""
  //   );
};

console.log(findLongestWord("Hello, My name is Shubhada Kunde"));
