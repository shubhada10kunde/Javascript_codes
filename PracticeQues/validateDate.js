const validateDate = (date) => {
  const regex =
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((10|20)[0-9]{2})$/.test(
      date
    );
  return regex;
};

console.log(validateDate("12/15/2021"));
console.log(validateDate("02/29/2021"));
console.log(validateDate("01/01/1800"));
console.log(validateDate("04/31/2020"));
console.log(validateDate("12/15/2021"));
console.log(validateDate("12/31/2099"));
console.log(validateDate("13 /01/2000"));
