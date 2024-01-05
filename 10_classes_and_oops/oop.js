const user = {
  username: "OM",
  loginCount: 9,
  signedIn: true,
  getUserDetails: function () {
    //console.log("Got User Details From DataBase");

    console.log(`Username : ${this.username} and ${this}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user["username"]);
console.log(user.getUserDetails());

const user2 = {
  username: "OM",
  loginCount: 9,
  signedIn: true,
  getUserDetails: function () {
    //console.log("Got User Details From DataBase");

    console.log(`Username : ${this.username} and ${this}`);
    console.log(this);
  },
};
//baar-2 bnnana pdega to constructor use krte h

//const promiseOne = new Promise()
const date = new Date();

//new => constructor function

// it allows to us to make a multple instances for executing same method. in other words , it used to make a new context.

// 1.jaisse hi ham new keyword use krenge to empty object(instance) create hota hai
// 2. new keyword ke karan constructor function call hota hai

// 3. this keyword ke saare argument ,empty object ke ander inject ho jate hai

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
  return this; // Emplicitly define hota hai
}

const userOne = User("Krishan", 12, true);
const userTwo = User("ChaiAurCode", 11, false); // userOne ki value ko overwrite kr dega
//console.log(userOne);//username: 'ChaiAurCode',loginCount: 11,isLoggedIn: false

const userThree = new User("Krishan", 12, true);
const userFour = new User("ChaiAurCode", 11, false);

console.log(userThree);
console.log(userFour);

//Constructor => . The constructor method is a special method of a class for creating and initializing an object instance of that class.

// When an object is created using the new keyword, the constructor gets called. The purpose of a constructor is to create a new object and set values for any existing object properties.

console.log(userTwo.constructor);

//instanceof Operator => The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.
// return type boolean

//Syntax  => object instanceof constructor

