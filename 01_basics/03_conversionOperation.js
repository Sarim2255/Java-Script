let score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));
// converting a string to integer 
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

//With another value which is alphanumberic
let score2 = "33abc"
console.log(typeof score2);
console.log(typeof(score2));
// converting a string to integer 
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

/*
"33"=>33
"33abc" =>NaN
true => 1; false => 0
*/

let isLoggedIn = "SAM"
let booleanIsLoggedein = Boolean(isLoggedIn)
console.log(booleanIsLoggedein)
/*
1 =>true; 0=>false
"sam"=>true
*/
let num = 33
let strNum = String(num)
console.log(strNum)
console.log(typeof strNum)