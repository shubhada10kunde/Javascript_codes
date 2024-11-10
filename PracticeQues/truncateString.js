const truncateString = (str, maxlength) => {
  //   if (maxlength <= 0) {
  //     return str;
  //   } else if (str.length > maxlength) {
  //     return str.slice(0, maxlength).concat("...");
  //   }
  // OR

  return maxlength <= 0 ? str : str.slice(0, maxlength).concat("...");
};

console.log(truncateString("Hello My Name is Shubhada Kunde", 8));
