// function firstNonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return "None";
// }

// console.log(firstNonRepeatingChar("aabbcde")); // Output: c
// console.log(firstNonRepeatingChar("aabbcc")); // Output: "None"

/////////////// OR ///////////////

// function firstNonRepeatingChar(str) {
//   let count = {};

//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (count[char] === 1) return char;
//   }
//   return "None";
// }
// console.log(firstNonRepeatingChar("aabbcde"));

/////////// OR //////////////

function firstNonRepeatingChar(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] || 0) + 1;
    console.log(str[i] + ":" + count[str[i]] + "\n");
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }
  return "None";
}

console.log(firstNonRepeatingChar("aabbcde"));
