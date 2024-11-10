const isObjEmpty = (obj) => {
  //   for (let key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return "its not empty";
  //     }
  //   }
  //   return "its empty";

  // OR
  return Object.keys(obj).length === 0 ? "its empty" : "its not empty";
};

console.log(isObjEmpty({ name: "Shubh" }));
console.log(isObjEmpty({}));
console.log(isObjEmpty({ age: null }));
