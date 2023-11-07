// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //true
console.log("02">1); //true

console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); //true

//The reason is that an equality check (==) and comparisons (>,<,>=,<=) work differently.

//=> Comparisons convert null to a number. treating it as 0 that's why (null>=0) is true and (null>0) is false.

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

/* Always avoid these types of conversions */

// ===  (strict check )
// it checks value of variable as well as datatypes

console.log("2"==2); // true beacuse yaha conversion hone lgta hai 

console.log("2"===2); // false it checks datatype also.

 
