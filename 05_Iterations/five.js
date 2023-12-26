//forEach loop

const coding = ["js","ruby","java","cpp","python"]

//call back function ka name nahi hota hai only function keyword use lete hai 

//with call back function
coding.forEach(function(item){
    console.log(item);
})


//with arrow function
coding.forEach((item)=>{
    console.log(item);
})

//with pass a normal function refrence in forEach loop

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
//####### intersting in forEach for interview

coding.forEach( (item ,index ,arr)=>{
    console.log(item,index,arr);
})

// js 0 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// cpp 3 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// python 4 [ 'js', 'ruby', 'java', 'cpp', 'python' ]


//Most Important
//********** interation in objects of array  */
const arr1 = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

arr1.forEach((item)=> {
    console.log(item.languageName);
})

