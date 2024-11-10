const generateHash = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map(
    (currElem) => currElem.replace(currElem[0], currElem[0].toUpperCase())
    //    OR
    //   currElem.charAt(0).toUpperCase() + currElem.slice(1)
  );

  str = `#${str.join("")}`;
  //   console.log(str);
  return str;
};

console.log(generateHash("my name is shubhada kunde"));
