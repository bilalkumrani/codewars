//palindrom

function check(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) {
      console.log(str[i], str[j]);
      return false;
    }
    j--;
  }
  return true;
}

console.log(check("civic"));
