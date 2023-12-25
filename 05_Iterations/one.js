//for 

for (let index = 0; index < 15; index++) {
   console.log(index);
   if(index==5){
     // console.log("5 is best");
   }
}

for (let i = 1; i <= 10; i++) {
   console.log(`Table of :${i}`);
   for (let j = 1; j <= 10; j++) {
      // console.log(`inner loop value : ${j} and inner loop value : ${i}`);
      console.log(i + '*' + j + ' = ' + i*j);
   }   
}

let myArray = ["flash","batman","thor"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
   const element = myArray[index];
   console.log(element);
}

// break and continue

for (let index = 1; index <=20; index++) {
   if(index == 5) {
      console.log(`Detected 5`);
      break   // jaise hi 5 aata hai control loop se bahar hojyga
   }
   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <=20; index++) {
   if(index == 5) {
      console.log(`Detected 5`);
      continue // condition ek baar ke liye skip ho jayegi
   }
   if(index == 17) {
      console.log(`Detected 17`);
      continue // condition ek baar ke liye skip ho jayegi
   }
   console.log(`Value of i is ${index}`);
}
