//while loop

let index = 1;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["shaktiman", "krrish", "naagraj", "thor"];

let arr = 0;

while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

//do while loop
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 5);

/*
    Score is 1
    Score is 2
    Score is 3
    Score is 4
    Score is 5
*/

//interesting concept is here

//if we initialize the variable out of the loop , do while loop run first then check the condition ,condition is false ,,there is no error

//like

let h = 6;
do {
  console.log(`Score is ${h}`); //6
  h++;
} while (h <= 5);
