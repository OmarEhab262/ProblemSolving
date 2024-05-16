function findNeedle(haystack) {
  count = 0;
  haystack.map((x, index) => (x == "needle" ? (count = index) : ""));
  return `found the needle at position ${count}`;
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
