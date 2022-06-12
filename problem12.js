// Given two integers a and b, which can be positive or negative, find the sum of
// all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//my solution
function getSum(a, b) {
  //Good luck!
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  let sum = 0;
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}
