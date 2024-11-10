// simple interest = (principle amt * rate of interest * time)/100

const calculateSimpleInterest = (amt, rate, time) => {
  return (amt * rate * time) / 100;
};

console.log(calculateSimpleInterest(1000, 5, 3));
