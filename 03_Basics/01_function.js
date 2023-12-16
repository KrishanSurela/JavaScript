//Function => this is the package of code where we want code written in the function we simply call it.

function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}
sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
   
    // let result  = number1 + number2
    // return result

    return number1 + number2
    console.log("Krishan");//unreachable code kabhi print nhi hoga
 }

const result = addTwoNumbers(4,9)
console.log("Result:",result); //Result: undefined  (Interesting Concept) console.log return nhi krta lekin return wale function ka result aayega


// addTwoNumbers(4,"9")//49 string type
// addTwoNumbers(4,"a")//4a string type
// addTwoNumbers(4,null)//4 number type


function loginUserMessage(username){
   
    return `${username} Just Logged In`
}

loginUserMessage("Krishan") // return kiya hua print nhi hoga bina console.log k

console.log(loginUserMessage("Krishan")) //Krishan Just Logged In
console.log(loginUserMessage("")) //Just Logged In

console.log(loginUserMessage()) //interesting question interview perpective se (Undefined Just Logged In)

//=====>

function loginUserMessage1(username){
    if (username === undefined) {
        console.log("Please Enter UserName");
        return
    }
   //OR
    if (!username) {
        console.log("Please Enter UserName");
        return
    }
    return `${username} Just Logged In`
}
console.log(loginUserMessage1())

//"" , undefined , !variable_name ko maan liya jata hai ki ye false value hai

//====>

function loginUserMessage2(username = "Monu"){
    
    return `${username} Just Logged In`
}
console.log(loginUserMessage2()) //Monu Just Logged In

console.log(loginUserMessage2("Krishan"))//Krishan Just Logged In


//###########
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))//200



//How To Solve Upper Problem

//=> Rest Operator (...) or Spread Operator


function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500))//[ 200, 400, 500 ]


//##########

function calculateCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice2(200,400,500,550,6554))//[ 500, 550, 6554 ]

//###  How to Pass Object In Function

const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

//handleObject(user)//Username is hitesh and Price is 199

handleObject({
    username:"Krishan",
    price :239
}) //Username is Krishan and Price is 239


//#### How to Pass Arrays In Function


const myNewArray = [100,200,500,800,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//200

//OR

function returnSecondValue1(getArray){
    return getArray[2]
}
console.log(returnSecondValue1([100,200,500,800,400]));//500