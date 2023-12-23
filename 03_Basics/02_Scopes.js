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

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}







