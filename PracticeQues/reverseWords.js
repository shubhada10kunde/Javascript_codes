const reverseWordsOfString = (str) => {
  const words = str.split(" ");
  console.log(words);
  let reversedSentence = "";

  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence = reversedSentence + words[i];

    if (i != 0) {
      reversedSentence = reversedSentence + " ";
    }
  }
  return reversedSentence;
};

console.log(
  reverseWordsOfString("Hello My name is Shubhada Bhalchandra Kunde")
);
