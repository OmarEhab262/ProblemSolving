function rentalCarCost(d) {
  let cost = 40;
  return d * cost
    ? d >= 7
      ? d * cost - 50
      : d >= 3
      ? d * cost - 20
      : d * cost
    : 0;
}

console.log("rentalCarCost: ", rentalCarCost(2));
