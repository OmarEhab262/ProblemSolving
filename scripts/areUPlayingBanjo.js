function areUPlayingBanjo(name) {
  return name.startsWith("R") ? `${name} play Banjo` : `${name} does not play`;
}
console.log(areUPlayingBanjo("kana"));
