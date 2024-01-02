//fetch('https://google.com').then().catch().finally

//1 promise create
const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async Task
  //DB calls ,cryptography,network call
  setTimeout(function () {
    console.log("Async Task Is Compelete");
    resolve(); //connects with promise Consume
  }, 1000);
});
//promise consume
promiseOne.then(function () {
  console.log("Promise Consumed");
});

//2 promise create

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Task 2 Async Resolved");
});

//3 promise create

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "Krishan@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//4 promise create

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "Krishan Kumar Surela",
        Password: "KrishanSurela@321",
      });
    } else {
      reject("Error : SomeThing Went Wrong");
    }
  }, 2000);
});

//const username = promiseFour.then use nhi kr skte
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //channing upper wale then ka return kiya hua yaha parameter me aayega
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  }); //it will call always

//console.log(username); error

//5 promise create (promise consume using Async await)

//async await can not handle error code(rejection) direclty
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "Sharad Mittal",
        Password: "321",
      });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 3000);
});

// async function consumePromiseFive(){
//     const response =await promiseFive
//     console.log(response);
// }

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//Next Class =>important try catch Syntax

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    const data = await response.json();//converting me bhi time lgta hai
    console.log(data);
  } catch (error) {
    console.log("E ;", error);
  }
}
getAllUsers();

//then(), catch() syntax fetch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>console.log("error"))
