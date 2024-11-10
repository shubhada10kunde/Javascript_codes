// ex :: listen <=> silent

const isAnagram = (str1, str2) => {
  let sortedstr1 = str1.split("").sort().join("");
  let sortedstr2 = str2.split("").sort().join("");
  //   console.log(sortedstr1);

  if (sortedstr1 === sortedstr2) {
    return true;
  }
  return false;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("raju", "kaju"));
