const name ="Krishan"
const repoCount =10

console.log(name + repoCount +  " Value"); // concatination method not recommended

console.log(`Hello My name is ${name} and repo count is ${repoCount}`); //string interpoletion {} and using backticks ``

//${name.toUpperCase}


//Declaration of string 

const gameName = "BGMI-India"
const gameId = new String('user43nh')

console.log(`gameName : ${gameName} and gameId : ${gameId}`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toLowerCase());

console.log(gameName.charAt()); // by default give the first character B

console.log(gameName.charAt(3)); //I

console.log(gameName.indexOf()); // by default -1

console.log(gameName.indexOf('M')); // 2


// substring method()


const newString = gameName.substring(2,5); //5-2 = 3=> end-start =3 letter => 2,3,4th index of string aur index me negative value nhi de skte agar di hai to index 0 se start hoga (-3,4) to 0 se 3 index tk print hoga

console.log(newString); // MI-
 
// slice() Method 

const anotherString = gameName.slice(2,6)
console.log(`anotherString : ${anotherString}`);   

//The slice() method in JavaScript is used to extract a part of a string and return it as a new string, without modifying the original string. Here is the syntax and how you can use it:

//string.slice(start, end)
//start: The start position where the extraction of the string should begin. The first character is at index 0. If start is a negative number, the index is counted from the end of the string.

//end: The end position up to, but not including, where the extraction of the string should stop. If end is omitted, slice() extracts to the end of the string. If end is a negative number, the index is counted from the end of the string.


let text = "The quick brown fox jumps over the lazy dog.";
let result;

// Slice the first 5 positions
result = text.slice(0, 5);  // Returns "The q"
console.log(result);

// From position 3 to the end
result = text.slice(3);  // Returns " quick brown fox jumps over the lazy dog."
console.log(result);

// From position 3 to 8
result = text.slice(3, 8);  // Returns " quic"
console.log(result);

// Only the first character
result = text.slice(0, 1);  // Returns "T"
console.log(result);

// Only the last character
result = text.slice(-1);  // Returns "."
console.log(result);

result = text.slice(-9,-5);   // lazy => 9-5 = 4   => start-end =4 letter =>  pichhe se index ginne pe 4 letter
console.log(result);

result = text.slice(-15,-7);  // r the la
console.log(result);

//trim() Method => I trim white spaces in given string from start and end. 

//trimStart()
//trimEnd()
const newStringOne ="   KrishanSurela   "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace() method => it replaces unwanted character with given character .it does not change original string return a new string

const url ="https://krishan.com/krishan%20surela"
console.log(url.replace('%20','_'))
console.log(url)

// includes() Method => it checks given character is available or not in string ,and its return type is boolean

console.log(url.includes('krishan')); //true
console.log(url.includes('kumar')); //false

// split() => The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and it returns the array.


const sentence = new String('Krishan-Kumar-Surela')
//or 

// const sentence ="Kishan-Kumar-Surela"
const words = sentence.split('-'); // - is seperator and  3 words take place in array 

const wordSplit = sentence.split('-',2);
console.log(wordSplit); // two word take place in an array
console.log(sentence); // [String: 'Krishan-Kumar-Surela']
console.log(words); // [ 'Krishan', 'Kumar', 'Surela' ]
console.log(typeof words); //object because it is array

console.log(words[2]);

// insert double qoute in string

const specialName = "My Name Is \"Krishan Surela\""
const specialCourse ="Advanced \'JEE\'"



console.table([specialName,specialCourse])

console.log("Hello\rWorld"); // 
console.log("Hello\fWorld"); // 




/*
=> 
Escape Sequence

=> \b - backspace
=> \f - form feed
=> \n - New Line
=> \r - Carriage Return
=> \t - Horizontal Tabulator
=> \v - Vertical Tabulator
*/



















/* 
string method 



anchor
: 
ƒ anchor()

ƒ at()  => The at() method returns an indexed character from a string.

The at() method returns the same as [].

ƒ big() => The big() method returns a string embedded in a <big> tag: NOT SUPPORTED
 
ƒ blink() =>The blink() method a string embedded in a <blink> tag: NOT SUPPORTED

ƒ bold() =>The bold() method returns a string embedded in a <b> tag:

<b>string</b>
 
ƒ charAt() => The charAt() method returns the character at a specified index (position) in a string.

The index of the first character is 0, the second 1, ... 

 
ƒ charCodeAt() => charCodeAt() returns the Unicode of the character at a specified position in a string.

let code = text.charCodeAt(1);

 
ƒ codePointAt() => The codePointAt() method returns the Unicode value at an index (position) in a string.

 
ƒ concat() =>  The concat() method joins two or more strings.

The concat() method does not change the existing strings.

The concat() method returns a new string. 
string.concat(string1, string2, ..., stringX)
 
ƒ String() => The String() method converts a value to a string. 
 
ƒ endsWith() => The endsWith() method returns true if a string ends with a specified string. Otherwise false
 
ƒ fixed() => the fixed() method created a string that contains a <tt> element. The value of the totn_string variable (which is 'TechOnTheNet') is enclosed within the <tt> and </tt> tags.

 
ƒ fontcolor() => The fontcolor() method returns a string embedded in a <font> tag:

<font color="colorvalue">string</font>

The <font> tag is not supported in HTML5.
 
ƒ fontsize() => The fontsize() method returns a string embedded in a <font> tag:

<font size="size">string</font>

The <font> tag is not supported in HTML5.
 
ƒ includes() => The includes() method returns true if a string contains a specified string.

Otherwise it returns false.

The includes() method is case sensitive.

 
ƒ indexOf() => The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

The indexOf() method is case sensitive.


isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
*/
