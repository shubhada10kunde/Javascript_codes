const passwordValidation = (password) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }

  if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
    return false;
  }
  return true;
};

console.log(passwordValidation("afkdsfadsf"));
console.log(passwordValidation("afkdsfadsf1"));
console.log(passwordValidation("afkdsfadsf1A"));
console.log(passwordValidation("afkdsfadsf1Aa"));
