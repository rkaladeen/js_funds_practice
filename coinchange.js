function coinChange(n){
  var change = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0}
  var temp = n; 
  if (temp >= 100){
    change.dollars = Math.floor(temp / 100)
    temp = temp % 100
  }if (temp >= 25){
    change.quarters = Math.floor(temp / 25)
    temp = temp % 25
  }if (temp >= 10){
    change.dimes = Math.floor(temp / 10)
    temp = temp % 10
  }if (temp >= 5){
    change.nickles = Math.floor(temp / 5)
    temp = temp % 5
  }if (temp >= 1){
    change.pennies = temp 
  }
  if (change.dollars == 0){delete change.dollars;}
  if (change.quarters == 0){delete change.quarters;}
  if (change.dimes == 0){delete change.dimes;}
  if (change.nickels == 0){delete change.nickels;}
  if (change.pennies == 0){delete change.pennies;}
  return change 
}

console.log(coinChange(78))