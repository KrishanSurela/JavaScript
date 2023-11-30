//stack Memory(Primitive datatypes)
//Heap Memory(Non-Primitive datatypes)

let myName = "Krishan"
let anotherName = myName
anotherName ="surela"
console.log(anotherName);
console.log(myName);

let userOne ={
    email:"user@gmail.com",
    upi:"krishansurela@ybl"
}
let userTwo = userOne

  userTwo.email = "Kri@gmail.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  