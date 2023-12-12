const marvel_heros = ["Thor","Ironman","Spiderman"]

const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);//[ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][2]); //batman

const combo = marvel_heros.concat(dc_heros)  //concat can combines two or more arrays and returns a new array without without modifying any existing arrays
console.log(combo);//[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros =[...marvel_heros,...dc_heros]

console.log(all_new_heros);//[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,4,[5,6,7],8,[3,4,[5,8]]]

const real_another_array = another_array.flat(Infinity)
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 3, 4,
//     5, 8
//   ]
console.log(Array.isArray("Krishan")) //false
console.log(Array.from("Krishan")) //Creates an array from an iterable object. 
// [
//     'K', 'r', 'i',
//     's', 'h', 'a',
//     'n'
//   ]
console.log(Array.from({name:"Krishan"})) //interesting result [] empty array ,, key ka array bnana h ya value ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  // of => Returns a new array from a set of elements.
console.log(Array.of("Krishan","Kumar","Surela"))  