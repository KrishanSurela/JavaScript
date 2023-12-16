const tinderUser = new Object() // singleton object
const tinderUser1 ={}
console.log(tinderUser,tinderUser1); //{}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname:"Krishan",
            lastname:"Surela"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = {...obj1,...obj2}//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({},obj1,obj2) //object.assign(target,source)

const users = [
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"j@gmail.com"
    },
    {
        id:4,
        email:"l@gmail.com"
    },
    {
        id:5,
        email:"k@gmail.com"
    },

] // array of object


console.log(obj3);
console.log(obj4);
console.log(obj5);

console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));//most important output datatype arrays (all keys in an array)

console.log(Object.values(tinderUser));//most important output datatype arrays (all values in an array)

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn',false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename:"Js In Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor ye baar bar na likhna pde to object ko destructure krte hai like

//const {courseInstructor} = course
const {courseInstructor : teacher} = course

console.log(teacher);

// const navbar = ({company}) =>{

// }

// navbar(company ="Google")

 //APIs => (Application Programming Interface)api backend se kucch values aati hai unko hm kaise likhte wo api hai , mostly api ki values json me aati hai
//JSON => JavaScript Object Notation

// {
//     "name":"KRISHAN",
//     "coursename":"JS",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]




 






