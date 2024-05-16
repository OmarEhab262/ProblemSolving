function repeatStr(n, s) {
  let str = "";
  for (let index = 0; index < n; index++) {
    str += s;
  }
  return str;
}
console.log(repeatStr(3, "omar"));
