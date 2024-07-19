function twiceAsOld(dadOld, sonOld) {
  return Math.abs(dadOld - sonOld * 2);
}
twiceAsOld(50, 5);
console.log(twiceAsOld(50, 5));

function divisibleBy(number, divisor) {
  return number.filter((e) => e % divisor == 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function sumSt(a, b) {
  return a & b ? Number(a + b).toString() : "0";
}
console.log(sumSt("5", "7"));

// function twoStart(s) {
//   return s.map((e) => e.sort()[0].split("").join("***"));
// }
// console.log(twoStart(["omar", "ahmed"]));

function twoStart(s) {
  return s.map((e) => e.split("").sort().join("").split("").join("***"));
}

console.log(twoStart(["omar", "ahmed"])); // ["***a***h***m***e***d", "***a***m***o***r"]
