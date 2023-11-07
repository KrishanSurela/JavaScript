// Primitive  Datatypes - 7 Types
// String,Number,Boolean,null,undefined,Symbol,BigInt

const score =100
const scoreValue=1004.4
const isLoggedIn=false
const outsideTemperature=null
let userEmail; //undefined
//let userEmail=undefined

const id = Symbol('1234')
const anotherid=Symbol('1234')

console.log(id,anotherid)
console.log(id===anotherid);

const bigNumber = 234242344432234n // n bigInt representation






//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


// Non Primitive Datatypes (Referance type)

//Array , Objects , Functions 
// the Non Premitive datatype

//Array
const heros =["Shaktiman","Naagraj","Krrish"]
//objects
let details={
    name:"Krishan",
    age: 22,
}
//Functions

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);



