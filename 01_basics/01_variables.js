const accId = 1422
let accountEmail = "mitesh@gmail.com"
var accPass = "1234567"
accCity = "Dhule"
let accState;


// accId = 2
accountEmail = "xyz@gmail.com"
accPass = "09876"
accCity = "pune"

console.log(accId);
console.table([accId, accPass, accountEmail, accCity, accState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
