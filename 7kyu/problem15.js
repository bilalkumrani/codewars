//my solution
function SeriesSum(n) {
  let result = 1;
  let den = 4;
  for (let i = 1; i < n; i++) {
    result += 1 / den;
    den += 3;
  }
  return `${result.toFixed(2)}`;
}
