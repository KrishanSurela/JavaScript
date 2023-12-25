//for in loop on object

const myObject ={
    js:'Javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by app"
}

for (const key in myObject) {
    // console.log(key  +" and Value "+ myObject[key]);
    console.log(`${key} shortcut for ${myObject[key]}`);
}


//for in loop on Array

const prog = ["js","rb","java","py","cpp"]

for (const key in prog) {
    console.log(key);//direct key print huyi hai for in loop me

    console.log(`${prog[key]} is value`);
}

//for in loop on Map

const map = new Map()

map.set('IN',"India")
map.set('NE',"Nepal")
map.set('JP',"Japan")
map.set('SR',"Sri lanka")

// for (const key in map) {
//      console.log(key); // not iterable but error not comming
// }
 
