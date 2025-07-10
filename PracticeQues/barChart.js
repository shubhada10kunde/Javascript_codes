const generateBarChart = (arr) => {
  //   const newArr = arr.map((currElem, index) => {
  //     let star = "";
  //     let number = 0;
  //     while (number < currElem) {
  //       star = star + "*";
  //       number++;
  //     }
  //     return `${index + 1}: ${star}`;
  //   });
  //   return newArr.join("\n");

  // OR
  return arr
    .map((currElement, index) => {
      return `${index + 1}: ${"*".repeat(currElement)}`;
    })
    .join("\n");
};

console.log(generateBarChart([5, 3, 8, 2]));
