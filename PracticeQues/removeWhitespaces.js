//  using regular expression
// \s matches whitespace characters including spaces, tabs, line breaks
// g is to perform global search

const removeWhitespaces = (str) => {
  const result = str.replace(/\s/g, "");
  return result;
};

console.log(removeWhitespaces(" Hi , Shubhada kunde "));
