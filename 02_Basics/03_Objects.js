// There are 2 types of declare the object 
// 1. literal
// 2. constructor

// constructor se jo object bnega wo hmesha singleton bnega
//Object.create constructor se 


// Object Literals
const JsUser ={
    Name:"Rohit",
    age:"22",
    "Full Name":"Krishan Kumar Surela",
    Location:"Jaipur",
    email:"krishan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

//console.log(JsUser.Full Name); error
console.log(JsUser["Full Name"]);

// Object me Symbol ko as a key use krna hai to syntax =>

const mySym = Symbol("key1")

const JsUser1 ={
    Name:"Rohit",
    age:"22",
    [mySym] :"myKey1",
    "Full Name":"Krishan Kumar Surela",
    Location:"Jaipur",
    email:"krishan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

console.log(JsUser1[mySym]);
console.log(typeof JsUser1[mySym]);

JsUser1.email="hitesh@facebook.com"
Object.freeze(JsUser1)
JsUser1.email="hitesh@google.com"
console.log(JsUser1);

//function in object => function ko variable ke tor pe use kr skte hai 


JsUser.greeting = function(){
    console.log("hello Js USer");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.age}`);
}
console.log(JsUser.greetingTwo());



