// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

//my solution
function SeriesSum(n) {
  if (n == 0) return "0.00";
  let result = 1;
  let den = 4;
  for (let i = 1; i < n; i++) {
    result += 1 / den;
    den += 3;
  }
  return `${result.toFixed(2)}`;
}

// best solution

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}
