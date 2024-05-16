function countPositivesSumNegatives(input) {
  negatives = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current, 0);
  positives = input.filter((x) => x > 0).length;
  return input.length == 0 || input === null ? [] : [positives, negatives];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
