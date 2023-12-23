//if

if (true) {
    
}
if (false) {
    
}
if(2==2){

}
const isUserLoggedIn =true;

if (isUserLoggedIn) {
    
}

//< ,> ,<= ,>= ,== ,!= , ===(strict equal) check datatype

if (3!=4) {
    
}

if (3==="3") {
    console.log("Executed");
}
else{
    console.log("Both Value are same But datatype is not Same");
}


const score =200
if (score>100) {
    const power ="fly"
    console.log(`user power : ${power}`);
}
//console.log(`user power : ${power}`); //error

//ShortHand Notation =>without braces

const balance = 20000
if (balance>2000) console.log("Yes");  //emplicit scope{}
   


else if (balance <100) 
{
    console.log("LEss than 100");
}
if(balance<900){
    console.log("LEss than 900");
}
else{
    console.log("LEss than 50000");
}


const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User LoggedIn");
}
