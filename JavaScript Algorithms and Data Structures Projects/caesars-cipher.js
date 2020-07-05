function rot13(str) {
  var firstCharCode = "A".charCodeAt();
  return str.replace(/[A-Z]/g, function(char){
    let charcode = firstCharCode + ((char.charCodeAt() - firstCharCode) + 13) % 26;
    return String.fromCharCode(charcode);
  });
}