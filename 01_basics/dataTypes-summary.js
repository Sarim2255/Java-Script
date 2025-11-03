/*
Note:[JavaScript is a dynamically typed language.

This means that variables in JavaScript do not have fixed types. Instead, the type of a variable is determined at runtime based on the value it holds. For example, a variable can hold a number at one moment and a string the next, without any errors.]
----------------------------------------------------------------------------
On the basis of storing and accessing the data(value) from the memory the datatypes are divided into two main categories.
1. Primitive DataType{
(7 types)->String, Number, Boolean, null, undefined, Symbol, BigInt...
}
2. Non-Pritive DataType(Reference DataType){
(3 types)Arrays, Objects, Functions
}
*/

// Primitive Datatypes Examples
const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue)

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp)

let userEmail;
// Syntax to use symbol 
const id1 = Symbol('123')
const id2 = Symbol('123')
// console.log(id1)
// console.log(id2)
// console.log(id1 === id2)

// Syntax to declare the BigInt 
const bigNumber = 345678912345n
console.log(typeof bigNumber)
// Reference (Non-Primitive) Examples

const heros = ["IronMan", "Thor", "Captain America"]
let myObj = {
    name : "RDJ",
    age : 45,
}
console.log(typeof myObj)
/*
function(){
    function definition 
}
*/
const myfunction = function(){
    console.log("Hello world");
}
console.log(typeof heros)       //Outpt->function object


