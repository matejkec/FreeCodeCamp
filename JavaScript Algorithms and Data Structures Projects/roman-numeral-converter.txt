function convertToRoman(num) {
  var romanNum = "";
  var romanDict = {
    "M" : 1000,
    "CM" : 900,
    "D" : 500,
    "CD" : 400,
    "C" : 100,
    "XC" : 90,
    "L" : 50,
    "XL" : 40,
    "X" : 10,
    "IX" : 9,
    "V" : 5,
    "IV" : 4,
    "I" : 1
  };
  
  for(let key in romanDict){
    let dictValue = romanDict[key]
    if(num >= dictValue){
      let tmp = Math.floor(num/dictValue);
      romanNum = romanNum.concat(key.repeat(tmp));
      num %= dictValue;
    }
  }
  
  return romanNum;
}