// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//my solution
function find_average(array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return array.length == 0 ? 0 : sum / array.length;
}
