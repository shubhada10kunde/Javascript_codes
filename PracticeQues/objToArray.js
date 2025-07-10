const obj = {
  name: "Shubhada Kunde",
  age: 25,
  city: "Pune",
};

// converting object to array
let entries = Object.entries(obj);
console.log(entries);
console.log(entries.flat());

// converting array to object
let newObj = Object.fromEntries(entries);
console.log(newObj);
