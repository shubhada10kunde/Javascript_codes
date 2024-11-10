const validateHexColor = (hexColor) => {
  const regex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(hexColor);
  return regex;
};

console.log(validateHexColor("#a3c113"));
console.log(validateHexColor("#1234567"));
console.log(validateHexColor("#a3c"));
console.log(validateHexColor("#a3c5"));
