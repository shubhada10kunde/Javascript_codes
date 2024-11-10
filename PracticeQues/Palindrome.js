// palindrome ia a word, number, phrase or characters that reads the same forward and backward, ignoring spaces, punctuation, capitalization

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  // (/\W/g,""):: uses the replace() method to remove all non-word characters from string like comma, punctuation, full stop...etc
  // non-word characters not belong to [a-z,A-Z,0-9]
  // the g flag performs a global search means it replaces all occurences of non-word character in the string.

  let reverse_str = str.split("").reverse().join("");
  //   console.log(str);
  //   console.log(reverse_str);
  return str === reverse_str ? "palindrome" : "Not Palindrome";
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("shubhada"));
console.log(isPalindrome("A man, a plan, a canal,panama"));
