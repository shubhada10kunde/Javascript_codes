// const reverseLetters = (str) => {
//   return str.replace(/\b[\w-]+\b/g, (word) =>
//     word.split("").reverse().join("")
//   );
// };

// console.log(
//   reverseLetters(
//     "We are at Ignite Solution! Their email-id is careers@ignitesol.com"
//   )
// );

// READING INPUT FROM THE KEYBOARD

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter a line: ", (input) => {
  const reverseLetter = (str) => {
    return str.replace(/\b[\w-]+\b/g, (word) =>
      word.split("").reverse().join("")
    );
  };

  const result = reverseLetter(input);
  console.log(result);
  r1.close();
});
