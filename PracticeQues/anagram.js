// ex :: listen <=> silent

// const isAnagram = (str1, str2) => {
//   let sortedstr1 = str1.split("").sort().join("");
//   let sortedstr2 = str2.split("").sort().join("");
//   //   console.log(sortedstr1);

//   if (sortedstr1 === sortedstr2) {
//     return true;
//   }
//   return false;
// };

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("raju", "kaju"));

function isAnagram(str1, str2) {
  sortedStr1 = str1.split("").sort().join();
  // console.log(str1.split(""));
  sortedStr2 = str2.split("").sort().join();

  if (sortedStr1 === sortedStr2) {
    return "both strings are anagram";
  }
  return "not anagram";
}

console.log(isAnagram("listen", "silent"));
