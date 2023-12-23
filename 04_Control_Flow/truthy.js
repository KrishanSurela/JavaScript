const userEmail ="h@krishan.ai"

if(userEmail){ //truthy value
    console.log("Got User Email"); //Run
}
else{
    console.log("Dont have User Email");
}

const userEmail1 =""

if(userEmail1){ //truthy value
    console.log("Got User Email");
}
else{
    console.log("Dont have User Email"); //Run
}


const userEmail2 =[]

if(userEmail2){ //truthy value
    console.log("Got User Email");//Run
}
else{
    console.log("Dont have User Email"); 
}



// falsy value 

// false,0,-0,BigInt 0n , "",null, undefined,NaN

//Truthy Value

//"0",'fasle'," ",[],{},function(){}


// How to Check Array is Empty
if(userEmail2.length === 0){
    console.log("Array is Empty");
}


//How to Check Object is Empty
const emptyObj ={}
if(Object.keys(emptyObj).length ===0){
    console.log("object is Empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1 ;

val1 = 5 ?? 10;
console.log(val1);//5

let val2;
val2 = null ?? 10;

console.log(val2);//10

let val3;
val3 = undefined ?? 15;

console.log(val3);//15

val4 = null??10??49
console.log(val4); //10


//Turniary Operator

// condition ? true :false

const iceTeaPrice =100

iceTeaPrice>=80 ? console.log("More Than 80"):console.log("Less Than 80");