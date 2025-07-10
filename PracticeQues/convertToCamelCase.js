const toCamelCase = (str) => {
  str = str.trim().split(" ");
  console.log(str);

  str = str.map((currElem, index) => {
    if (index === 0) {
      return currElem.toLowerCase();
    } else {
      return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();
    }
  });
  console.log(str);
  return str.join("");
};

console.log(toCamelCase("hi i aM shUbhada"));
