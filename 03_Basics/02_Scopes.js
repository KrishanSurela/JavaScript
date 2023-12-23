var c = 300

if(true){
    let a = 10
    const b =20
   // var c =30
    c =30

}

//console.log(a);//error
//console.log(b);//error
console.log(c);//30 // var block scope ko access kr skta hai

let m = 300

if(true){
    let m =20
    console.log("Inner m :",m);//20
    const t = 50
}

console.log("Outer m :",m);//300 let global scope ko access krta hai 

 

//Nested Scope

function one(){
    
    const Username ="Krishan Surela"
   
    function two(){
        const website = "Youtube"
        console.log(Username); //child function h wo parent function ke variable k0 access kr skte hai
    }
    //console.log(website); error
    two()
}
one()



if (true) {
    const username = "Krishan"
    if(username==="Krishan"){
        const website =" Google"
        console.log(username + website);
    }
   // console.log(website); error
}
//console.log(username); error


//++++++++++Interesting++++++++++


console.log(addOne(5)) //6

function addOne(num){  //Function
    return num+1

}
//console.log(addOne(5)) //6



//Hoisting

addTwo(5) //error Cannot access 'addTwo' before initialization

const addTwo = function(num){   //Expression 
    return num+2
}
//console.log(addTwo(5)) //7

