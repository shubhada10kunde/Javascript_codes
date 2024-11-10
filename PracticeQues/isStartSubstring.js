const startWith = (str, substring) => {
  //   return str.toLowerCase().startsWith(substring.toLowerCase());

  // OR
  return (
    str.toLowerCase().slice(0, substring.length) === substring.toLowerCase()
  );
};

console.log(startWith("Hello world", "hello"));
console.log(startWith("hello world", "world"));
