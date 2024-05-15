function sumArray(array) {
  return array == null
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, current) => acc + current, 0);
}
console.log(sumArray([3, 5, 1, 4, 9]));
