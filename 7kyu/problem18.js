// remove vovels from string
//my soluton
function disemvowel(str) {
  let result = "";
  for (i of str) {
    if (
      i == "a" ||
      i == "A" ||
      i == "E" ||
      i == "e" ||
      i == "I" ||
      i == "i" ||
      i == "O" ||
      i == "o" ||
      i == "U" ||
      i == "u"
    ) {
      continue;
    } else {
      result += i;
    }
  }
  return result;
}

console.log(disemvowel("this site is for losers LOL!"));
