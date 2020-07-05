function palindrome(str) {
  str = str.toLowerCase().replace(/[^0-9a-z]/g, '')
  var reverseStr = str.split("").reverse().join("");
  if (str === reverseStr){
    return true;
  }
  return false;
}