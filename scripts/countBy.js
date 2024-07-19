function countBy(x, n) {
  let z = [];
  for (let index = 1; index <= n; index++) {
    z.push(index * x);
  }
  return z;
}
console.log(countBy(47, 16));
