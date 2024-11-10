// program to find no of days between 2 dates

const calculateDaysBetweenDates = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let diff = Math.abs(d2 - d1);
  //   console.log(diff);
  return diff / (24 * 60 * 60 * 1000);
  //   console.log(currDate.toLocaleTimeString());
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-20"));
