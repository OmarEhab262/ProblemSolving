function positiveSum(arr) {
  let sumPositvie = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      sumPositvie += arr[index];
    }
  }
  return sumPositvie;
}
console.log(positiveSum([2, -3, 10]));
