//check wether string is pangram or not pangram means the string must contains all the alphabets

//my solution
function isPangram(string) {
  let regex = /([a-z])(?!.*\1)/gi;
  return string.match(regex).length === 26;
}
