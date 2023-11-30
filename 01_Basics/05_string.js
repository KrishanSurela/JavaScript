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

// Only the last 5 character
result = text.slice(-5);  // Returns " dog."
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

let text1 = "Hello planet earth, you are a great planet.";
let result1 = text1.lastIndexOf("planet", 20); // start ke 20 character ke ander last index of "planet" kitne index pe ata hai
console.log(result1);
let result2 = text1.lastIndexOf("t");  // string ke total character me se last wala t konsa index pe aata hai.
console.log(result2);

    let text0 = "ab";
    let text2 = "ab";
    let result5 = text0.localeCompare(text2);// 0

    let text3 = "aB";
    let text4 = "ab";
    let result4 = text3.localeCompare(text4); // 1

    let text5 = "ab";
    let text6 = "Ab";
    let result3 = text5.localeCompare(text6); // -1

    console.log(`result5 is ${result5} , result4 is ${result4} , and result3 is ${result3}`);

    const mood = 'Very Happy! ';

    console.log(`I feel ${mood.repeat(5)}`);
    // Expected output: "I feel Very Happy! Very Happy! Very Happy! Very Happy! Very Happy! "

    const str = 'The quick brown fox jumps over the lazy dog.';
    Expected Output :

    "brown"
    "fox"
    "dog"
    const arr =str.split(' ');
    console.log(arr[2])
                    console.log(arr[3])
    console.log(arr[8])

    
















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


 
ƒ isWellFormed() => The isWellFormed () method returns a boolean value, true if the string does not contain any lone surrogates, and false otherwise.
 
ƒ italics() => The italics() method returns a string embedded in an <i> tag:


 
ƒ lastIndexOf() => the lastIndexOf() method returns a last index of any given character.

The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

The lastIndexOf() method searches the string from the end to the beginning.

The lastIndexOf() method returns the index from the beginning (position 0).

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() method is case sensitive.



length => it is property of string. it is not string function.
            The length property returns the length of a string.

            The length property of an empty string is 0.
 
 
ƒ link() =>  The link() method returns a string embedded in an <a> tag:

<a href="url">string</a>
 
ƒ localeCompare() => 

The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.

	One of 3 values:

    -1 if the string is sorted before the compareString
    0 if the two strings are equal
    1 if the string is sorted after the compareString

    let text1 = "ab";
    let text2 = "ab";
    let result = text1.localeCompare(text2);// 0

    let text1 = "aB";
    let text2 = "ab";
    let result = text1.localeCompare(text2); // 1

    let text1 = "ab";
    let text2 = "Ab";
    let result = text1.localeCompare(text2); // -1




match
: 
ƒ match() =>    The match() method matches a string against a regular expression **

                The match() method returns an array with the matches.

                The match() method returns null if no match is found.

                //match() searches for a match in a string.

                let text = "The rain in SPAIN stays mainly in the plain";
                let result = text.match("ain"); //ain

                //match() searches for a match against a regular expression.


                let text = "The rain in SPAIN stays mainly in the plain";
                let result = text.match(/ain/); // ain

                //global search for "ain
                "
                let text = "The rain in SPAIN stays mainly in the plain";
                let result = text.match(/ain/g);// ain,ain,ain

                //Do a global, case-insensitive, search for "ain":

                let text = "The rain in SPAIN stays mainly in the plain";
                let result = text.match(/ain/gi);// ain,AIN,ain,ain


       ***
      
        The Difference Between String match() and String search()

            The match() method returns an array of matches.

            The search() method returns the position of the first match.

        ***

matchAll  =>
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
 
ƒ padEnd() => The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

                const str1 = 'Breaded Mushrooms';

                console.log(str1.padEnd(25, '.'));
                // Expected output: "Breaded Mushrooms........"

                const str2 = '200';

                console.log(str2.padEnd(5));
                // Expected output: "200  "

                
                const fullNumber1 = '555574374857';
                const start8Digits = fullNumber1.slice(0,8);
                const maskedNumber1 = start8Digits.padEnd(fullNumber1.length,'*')
                console.log(maskedNumber1)

                //Expected Output: "55557437****"

 
ƒ padStart() =>  The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

                const str1 = '5';

                console.log(str1.padStart(10, '0'));
                // Expected output: "0000000005"

                const fullNumber = '2034399002125581';
                const last4Digits = fullNumber.slice(-4);
                const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

                console.log(maskedNumber);
                // Expected output: "************5581"
 
ƒ repeat() =>        The repeat() method of String values constructs and returns a new string which contains the specified number of                    copies of this string, concatenated together.

                    const mood = 'Happy! ';

                    console.log(`I feel ${mood.repeat(3)}`);
                    // Expected output: "I feel Happy! Happy! Happy! "

                    "abc".repeat(-1); // RangeError
                    "abc".repeat(0); // ''
                    "abc".repeat(1); // 'abc'
                    "abc".repeat(2); // 'abcabc'
                    "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
                    "abc".repeat(1 / 0); // RangeError


 
ƒ replace()  =>   The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

                    const paragraph = "I think Ruth's dog is cuter than your dog!";

                    console.log(paragraph.replace("Ruth's", 'my'));
                    // Expected output: "I think my dog is cuter than your dog!"

                    const regex = /Dog/i;
                    console.log(paragraph.replace(regex, 'ferret'));
                    // Expected output: "I think Ruth's ferret is cuter than your dog!"

 
ƒ replaceAll()  =>   The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.


                    const paragraph = "I think Ruth's dog is cuter than your dog!";

                    console.log(paragraph.replaceAll('dog', 'monkey'));
                    // Expected output: "I think Ruth's monkey is cuter than your monkey!"

                    // Global flag required when calling replaceAll with regex
                    const regex = /Dog/gi;
                    console.log(paragraph.replaceAll(regex, 'ferret'));
                    // Expected output: "I think Ruth's ferret is cuter than your ferret!"

 
ƒ search() => search() searches a string for a value and returns the position of the first match:
                const paragraph = "I think Ruth's dog is cuter than your dog!";

                // Anything not a word character, whitespace or apostrophe
                const regex = /[^\w\s']/g;

                console.log(paragraph.search(regex));
                // Expected output: 41

                console.log(paragraph[paragraph.search(regex)]);
                // Expected output: "!"

                let text = "Mr. Blue has a blue house"
                let position = text.search("Blue");
                console.log(position); //4
                console.log(text[text.search["blue"]) // blue

  
ƒ slice()       => The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

                const str = 'The quick brown fox jumps over the lazy dog.';

                console.log(str.slice(31));
                // Expected output: "the lazy dog."

                console.log(str.slice(4, 19));
                // Expected output: "quick brown fox"

                console.log(str.slice(-4));
                // Expected output: "dog."

                console.log(str.slice(-24, -19));
                // Expected output: "jumps"

                console.log(str.slice(20,25)) // jumps

                console.log(str.slice(0,5)) // The q


 
ƒ small()   =>  

ƒ split()    =>  The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

                const str = 'The quick brown fox jumps over the lazy dog.';

                const words = str.split(' ');
                console.log(words[3]);
                // Expected output: "fox"

                const chars = str.split('');
                console.log(chars[8]);
                // Expected output: "k"

                const strCopy = str.split();
                console.log(strCopy);
                // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
                console.log(strCopy[0]); // "The quick brown fox jumps over the lazy dog."


                Logic Quexs 

                const str = 'The quick brown fox jumps over the lazy dog.';
                Expected Output :

                "brown"
                "fox"
                "dog"

                answer
                const arr =str.split(' ');
                console.log(arr[2])
                                console.log(arr[3])
                console.log(arr[8])

                

 
ƒ startsWith() =>
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
