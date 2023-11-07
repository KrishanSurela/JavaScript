let score ="331bc"
// let score =null
// let score =undefined
// let score = true
// let score ="krishan"
console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber); //number

console.log(valueInNumber);
//if score is "33" then output will 33 as a number ("33"=>33)
// if score is "3324n" as string then output will NaN or Not a Number ("3324n"=>NaN)

// if score is null then output will 0. (null=>0)
// if score is undefined then output will NaN(undefined => NaN)
// if score is boolean then output will 0 or 1. (boolean=>0 or 1)
// if score is "krishan" then output will NaN

// number to boolean conversion
let isLoggedIn=1;
//let isLoggedIn =""
//let isLoggedIn="Krishan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1  => true ;
// 0  => false ; 
// "" => false ; 
// "Krishan" => true;

// nuumbeer to string conversion

let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);









