
//@@@@@@@@@  NUmbers @@@@@@@@@@@@@
const score =400
console.log(score);//400 (number type)
const balance = new Number(100)
console.log(balance); // [Number :100]

console.log(balance.toString());//100 (string)
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));// 100.00 (string type) (pricision value is 2)
const otherNum = 231.4567
console.log(otherNum.toPrecision(3));// 231
const Num =342.9
console.log(Num.toPrecision(3)) // 343

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000
const Nume = new Number(300)
 
//@@@@@@@@@@@ Math @@@@@@@@

console.log(Math);

console.log(Math.abs(-4)); //4
console.log(Math.abs(4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.sqrt(196)); //14
console.log(Math.pow(3,4)); //81 Math.pow(base, exponent)
Math.pow(4, 0.5); // 2 (square root of 4)
Math.pow(8, 1 / 3); // 2 (cube root of 8)
Math.pow(2, 0.5); // 1.4142135623730951 (square root of 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (cube root of 2)

// Signed exponents
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signed bases
Math.pow(-7, 2); // 49 (squares are positive)
Math.pow(-7, 3); // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

console.log(Math.min(45,85,21,75));//21
console.log(Math.max(45,85,21,75));//85
console.log(Math.random()); // 0 to 1 values

console.log((Math.random()*100)+1); //+1 esliye kyuki 0 to 1 me se 0.04 bhi a skkti hai to 0 o avoid kiya gya hai
console.log(Math.ceil(Math.random()*100)+1); 
console.log(Math.floor(Math.random()*100)+1); 

const min =15
const max =25
//important 
console.log(Math.floor(Math.random()*(max-min+1))+min);
















