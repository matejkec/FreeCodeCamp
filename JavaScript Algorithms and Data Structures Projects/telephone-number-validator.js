function telephoneCheck(str) {
  var regex = [
    /^(1 )?\d{10}$/,
    /^(1 )?\d{3}(-| )\d{3}(-| )\d{4}$/,
    /^1? ?\(\d{3}\)( |)\d{3}(-| )\d{4}$/
  ];

  for(let key in regex){
    if(str.match(regex[key])) return true;
  }
  return false;
}