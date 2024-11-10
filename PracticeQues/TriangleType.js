const CheckTriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral Triangle";
  if (a === b || b === c || a === c) return "isosceles Triangle";
  return "scelene Triangle";
};

console.log(CheckTriangleType(3, 3, 3));
console.log(CheckTriangleType(3, 5, 3));
console.log(CheckTriangleType(3, 6, 8));
