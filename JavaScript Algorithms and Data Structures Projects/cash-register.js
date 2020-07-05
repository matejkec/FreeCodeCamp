function checkCashRegister(price, cash, cid) {
  var change = {status: "INSUFFICIENT_FUNDS", change: []};
  var remainingAmount = (cash - price).toFixed(2);
  var moneyInCR = sumCashRegister(cid);
  if (moneyInCR - remainingAmount == 0) {
    change["status"] = "CLOSED";
    change["change"] = cid;
  } else if (moneyInCR - remainingAmount > 0) {
    change["status"] = "OPEN";
    cid = cid.reverse();
    while(cid.length > 0){
      var min = Math.min(cid[0][1], Math.floor(remainingAmount/money[cid[0][0]]) * money[cid[0][0]]);
      if (min != 0) {
        cid[0][1] = min;
        change["change"].push(cid[0]);
        remainingAmount = (remainingAmount - min).toFixed(2);
        if (remainingAmount == 0){
          break;
        }
      }
      cid.shift();
      if (sumCashRegister(cid) - remainingAmount < 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    }
  }
  return change;
}

var money = {
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1,
  "FIVE" : 5,
  "TEN" : 10,
  "TWENTY" : 20,
  "ONE HUNDRED" : 100
};

function sumCashRegister(array){
  var total = 0.0;
  for(var i = 0; i < array.length; i++){
    total += array[i][1];
  }
  return total.toFixed(2);
}