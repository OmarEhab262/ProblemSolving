function solution(a, b) {
  return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`;
}
console.log("solution: ", solution(1, 22));
