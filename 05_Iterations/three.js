//Array Specific Loop

//1. for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hellow World !"

for (const greet of greetings) {

    console.log(`Each Char is ${greet}`);

}

// Map => map can hold uniquie value ,cant hold duplicate value

const map = new Map()

 map.set('IN',"INDIA")
 map.set('USA',"United state of america")
 map.set('fr',"France")
 //map.set('fr',"France")

 console.log(map);


 //Loop on Map

 for (const key of map) {
    console.log(key); //  output array
 }

 for (const [key ,value] of map) { // destructure of array
    
    console.log(key, ':-' , value);
 }

 const myObject ={
     Game1:'NFS',
     Game2:'Spiderman'
 }

//  for (const [key,value] of myObject) {
//     console.log(key, ':-' , value);
//  }object is not iterable here 
//dusra tarika 

//new file me










