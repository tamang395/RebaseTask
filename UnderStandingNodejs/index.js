"use strict"
const add1 = require('./app.js')
//task one to print hellow world 
console.log("hello world")

//##Understand and demonstrate examples of primitive types and functions in NodeJS ,eg. var, const, let, bool, arrays, etc. 
//Explain the importance of use-strict. Perform exporting of functions and variables from a file.
//function is the procedure and we can call multiple time for specific task
function funcall() {
    return "this is my normal function"
}
console.log(funcall());
//var eg
var number = 123; //it value can be over ride and string num obj and etc

//const 
const pi = 3.14//it cant be change and used till the end of the program

//let
let num = 345;//it is also store data any string  it also same as var but it is block scope

//Array
let array = [1, 2, 3, 5, "name1", "name2"]// it can store multiple value in the array and we can fetch all value

//object 
//it cantains key and value and we can access through it property by using . and [ ] operator
let biodata = {
    name: "prithvi",
    age: 23,
    hobbies: ["singing", "gaming", "football"],
}


//boolean
//it contain only true or false
let isSafe = true;

//undefined
let hobbies;// it will show undefined and becaseu we dont have initialized it

//null
let tree = null;//tree is known to exist now but it has no type or value

//export function 
const sum = add1(9, 2);
console.log(sum)