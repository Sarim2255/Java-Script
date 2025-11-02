const accountId = 123455
// If using "const" keyword then the value of the certian variable can't be changed. 
let accountEmail = "sam@gmial.com"
var accoundPassword = 123456
accountCity = "Delhi"
let accountState;

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId)
console.log(accountEmail)

console.table([accountId,accountEmail,accoundPassword,accountCity,accountState])
// To get the output in form of tables we use "console.table([var1,var2,...varn])"

// Reassigning the values to each and every variables
// accoundId = 2 //"This is not allowed" because of the 'const' keyword
accountEmail = "sam@google.com"
accoundPassword = "98765"
accountCity = "Bengaluru"
console.table([accountId,accountEmail,accoundPassword,accountCity])
