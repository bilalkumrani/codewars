// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//my solution
function XO(str) {
  //code here
  let x = 0;
  let o = 0;
  for (i of str) {
    if (i == "x" || i == "X") x += 1;
    if (i == "o" || i == "O") o += 1;
  }
  return x === o;
}
