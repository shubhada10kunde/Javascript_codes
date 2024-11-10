const validateIndianMobNo = (num) => {
  const regex = /^[6-9][0-9]{9}$/.test(num);
  return regex;
};

console.log(validateIndianMobNo("9370798818"));
console.log(validateIndianMobNo("0123456789"));
console.log(validateIndianMobNo("7588173218"));
console.log(validateIndianMobNo("8668870315"));
