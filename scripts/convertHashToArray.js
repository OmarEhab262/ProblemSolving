function convertHashToArray(hash) {
  num = [];
  keys = Object.keys(hash);
  values = Object.values(hash);
  for (let index = 0; index < keys.length; index++) {
    num.push([keys[index], values[index]]);
  }
  return num;
}
console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
