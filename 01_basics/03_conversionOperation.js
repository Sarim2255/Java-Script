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

// *****************************Operations************************************

let value = 3
let negValue = -value
// console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%3);

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3);
console.log("1"+2);     //output->12
console.log("1"+2+2);   //output->122
console.log(1+"2");     //output->12
console.log(1+2+"2");   //output->32
console.log(+true)
console.log(+"")
// ----------------------------------------------------------------------------
let num1, num2, num3
num1 = num2 = num3 = 2+2
// ----------------------------------------------------------------------------
let gameCounter = 100
++gameCounter
// gameCounter++
console.log(gameCounter)

// for relevance the link is provided below
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion