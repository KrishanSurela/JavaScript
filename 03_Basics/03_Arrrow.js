const user ={
    username :"hitesh",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website `);
        console.log(this);
    }
    //this refers current context
}

user.welcomeMessage() //hitesh , Welcome to Website 
user.username="Krishan"
user.welcomeMessage() //Krishan , Welcome to Website

console.log(this); // {} current context empty ayega but browser me console.log(this) ko print krwate hai to window likha aata hai

//Browser ke ander global object window object hai tbhi ham event krwa paate hai

//Array Function

function chai(){
    let username = "Krishan"
    console.log(this)
}
chai()

//<ref *1> Object [global] {
//     global: [Circular *1],
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 106.79269999265671,
//         nodeStart: 8.916800022125244,
//         v8Start: 17.306100010871887,
//         bootstrapComplete: 74.10030001401901,
//         environment: 41.27009999752045,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1703312280148.917
//     },
//     fetch: [AsyncFunction: fetch]
//   }

function chai(){
    let username = "Krishan"
    console.log(this.username) // undefined    function ke ander this use nhi kr pa rhe hai
}
chai()


const chai1 = function(){
    let username = "Krishan"
    console.log(this.username) 
}

chai1()//undefined


const chai2 = () =>{        // Arrow Function
    let username = "Krishan"
    //console.log(this.username) //undefined
    console.log(this)  //{}
}

chai2()
//Explicite return arrow Function //

const addTwo = (num1,num2)=>{
    return num1+num2
}
const addTwo3 = (num1,num2)=> {return num1+num2}

//Emplicite Return Arrow Function

const addTwo1 = (num1,num2)=> num1+num2
const addTwo2 = (num1,num2)=> (num1+num2)
 

console.log(addTwo(7,8));
console.log(addTwo1(8,8));
console.log(addTwo2(8,9));
console.log(addTwo3(8,14));

//object return in arrow function

const myObjReturn = ()=> ({username:"Hitesh"})
console.log(myObjReturn());

// const myArray = [3,5,7,8,9,34]
// myArray.forEach(function(){})
// myArray.forEach(() => {})



