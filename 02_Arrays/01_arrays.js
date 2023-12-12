const myArr = [0,1,2,3,4,5,true,"Krishan"]
const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)


//Javascript arrays are resizable and can mix of different datatypes.
//Javascript arrays are not associative  arrays and so,arrays elements can not be accessed using nonnegative integers for their respective string form)

//Javascript arrays has zero based indexing

//
console.log(myArr[0]);

//Array Methods

myArr.push(8)
console.log(myArr);
myArr.push(9)
console.log(myArr);
myArr.pop()  // remove value of last index
console.log(myArr);
myArr.unshift(9) // add the new value on 0th index saari array ki value shift huyi computer pe load aata hai
console.log(myArr);

myArr.shift()
console.log(myArr); // remove the value from 0th index

console.log(myArr.includes(4)); // value arrays me hai ya nahi bollean return type
console.log(myArr.indexOf(6));// -1

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);

// slice() and splice() => diffrence 
// slice method dont change original array and splice method manipulate original arrays


console.log("Original Array ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("After Slice ",myArr);

const myn2 = myArr.splice(1,3) 
console.log(myn2);
console.log("After Splice ",myArr);


