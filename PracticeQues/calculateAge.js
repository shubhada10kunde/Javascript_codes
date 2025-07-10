// const calculateAge = (birthDate) => {
//   let currDate = new Date();
//   birthDate = new Date(birthDate);
//   console.log(currDate);

//   let age = currDate.getFullYear() - birthDate.getFullYear();
//   //   console.log(age);

//   let monthDiff = currDate.getMonth() - birthDate.getMonth();

//   if (monthDiff < 0 || currDate.getDate() < birthDate.getDate()) {
//     age--;
//   }
//   return age;
// };

// console.log(calculateAge("1999-08-10"));

function calculateAge(birthDate) {
  let currentDate = new Date();
  birthDate = new Date(birthDate);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  let monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || currentDate.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
}

console.log(calculateAge("1999-08-10"));
