let data = new Map([
  ["name", "Shubh"],
  [true, "bool key"],
  [100, "hundred"],
]);
data.set("color", "green");
// console.log(data.size);
// console.log(data.has(100));
// console.log(data.get(100));
// data.clear();
// console.log(data);

// for (let i of data) {
//   console.warn(i[1]);
// }

data.forEach((val, key) => {
  console.log(val);
  console.log(key);
});
