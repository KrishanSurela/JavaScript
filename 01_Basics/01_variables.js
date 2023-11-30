const accountId = 1444587
let accountEmail = "kkrishansurela188@gmail.com"
var accountPass ="54321"
accountCity = "Kotputli"

let accountState;
// accountId=5 Not Allowed
console.log(accountId)
accountEmail="Krishan@gmail.com"
accountPass="212323"
accountCity="Bengaluru"


/*
prefer not to use var
because of issue in block scope and functional scope

*/
let a=5
console.log(a);
if (a>4) {
     let br=0;
}
// console.log(br);

var b=5
console.log(b);
if (b>4) {
    var ar=0
}
console.log(ar);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

// The let keyword was introduced in ES6 (2015)

// Variables defined with let cannot be Redeclared

// Variables defined with let must be Declared before use

// Variables defined with let have Block Scope

// Block Scope
// Before ES6 (2015), JavaScript had Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block: