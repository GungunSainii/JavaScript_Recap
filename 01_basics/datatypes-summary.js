// Data Types : 2 types : How value accessed and stored in memory
//Call by value and Call by reference

// Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Type define not needed- Dynamically typed lang - JS 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//Identify the return type of these datatype

// https://262.ecma-international.org/5.1/#sec-11.4.3