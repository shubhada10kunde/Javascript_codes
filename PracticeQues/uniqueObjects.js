const uniqueObjects = (arr) => {
  const unique = [];
  const names = new Set();
  //   console.log(names);

  for (let obj of arr) {
    if (!names.has(obj.name)) {
      names.add(obj.name);
      //   console.log(names);
      unique.push(obj);
    }
  }
  return unique;
};

console.log(
  uniqueObjects([
    { name: "shubh" },
    { name: "rupesh" },
    { name: "shubh" },
    { name: "rupesh" },
    { name: "121212" },
  ])
);
