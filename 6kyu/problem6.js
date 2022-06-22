// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// my solution
function isIsogram(str) {
  let occurence = 0;
  str = str.toUpperCase();
  for (let i of str) {
    for (let j of str) {
      if (i == j) {
        occurence += 1;
      }
    }
    if (occurence > 1) {
      return false;
    }
    occurence = 0;
  }
  return true;
}
