let myName = "Krishan  ";
console.log(myName.length);
//console.log(myName.truelength()); Now we cant do it

let myHeros = ["Thor", "captain", "Spiderman", "doctor"];

let heroPower = {
  Thor: "hammer",
  captain: "shield",
  Spiderman: "sling",
  doctor: "magic",

  getSpiderPower: function () {
    console.log(`Spiderman Power is ${this.spiderman}`);
  },
};

//create a new property all in Object

//there are two datatypes which is array(myHeros) and object(heroPower)

// We want to create a new property in these datatypes

// heroPower.krishan()

Object.prototype.Krishan = function () {
  console.log(`Krishan Is Present In all Object`);
};

//heroPower.Krishan();
myHeros.Krishan();

//yaha agar ham array ko hi power de dete hai property add krne ki to kya object ke pass bhi wo property jayegi dekhte hai

Array.prototype.HeyHitesh = function () {
  console.log(`Krishan Says Hello`);
};

myHeros.HeyHitesh(); // myHeros has access of HeyHitesh Function
//heroPower.HeyHitesh(); // heroPower Should not have access of HeyHitesh function kyuki agar object me properties add krte hai to array object se ghujr ke jata hai to array ke pass automatically access krne ki power aa jati hai but array ko power dete hai to object ,function and string se properties access nhi kr skte hai

// function----> Object ---> null

// Array ---> Object ---> null

// string ---> Object ---> null

// ProtoTypial inheritance  (OutDated Approach)

const user = {
  name: "Surela",
  email: "surela@gmail.com",
};

const Teacher = {
  makevideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: `JS Assignment`,
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// New Approach (Modern Syntax) of prototypial inheritance

Object.setPrototypeOf(TeachingSupport, Teacher);

// Line Number 3 Question Solution

let anotherUsername = "Krishan  ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is :${this.trim().length}`);
  
};

anotherUsername.trueLength();

"PriyanshiLibrary".trueLength()//PriyanshiLibrary ,True Length is :16
"Bansur  ".trueLength()
