//Dates 

let mydate = new Date()
console.log(mydate.toString()); //Tue Nov 28 2023 00:57:59 GMT+0530 (India Standard Time)


console.log(mydate.toDateString());//Tue Nov 28 2023

console.log(mydate.toISOString());//2023-11-27T19:30:55.157Z
console.log(mydate.toJSON());// 
console.log(mydate.toLocaleDateString());// 
console.log(mydate.toLocaleString());// 
console.log(mydate.toLocaleTimeString());//
console.log(mydate.toTimeString());//
console.log(mydate.toUTCString());//
console.log(mydate.getTimezoneOffset());//
console.log(typeof mydate);//object

// let newCreatedDate = new Date(2023,2,23) 
let newCreatedDate = new Date(2023,2,23,5,6) 
console.log(newCreatedDate.toString());//Mon March 23 2023

console.log(newCreatedDate.toLocaleString());// 3/23/2023, 5:06:00 AM

let newCreatedDate1 = new Date("2023-02-13") 
console.log(newCreatedDate1.toLocaleString())
console.log(newCreatedDate1.getTime()); // get milisecond from 1 jan 1970

let newCreatedDate3 = new Date("07-25-2023") 
console.log(newCreatedDate3.toLocaleString()) //

let newCreatedDate2 = new Date("2023-07-25") 
console.log(newCreatedDate2.toLocaleString()) // 

let myTimeStamp = Date.now()
console.log(myTimeStamp);// time is in milisecond

console.log(Math.floor(myTimeStamp/1000)); // time in second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); // 11 means Nov from 2023-11-27T19:57:29.872Z
console.log(newDate.getDay()); // 2 means tuesday

const options ={
    weekday:"long", //ctrl+space
    timeZoneName :"longGeneric",
    year :"numeric",
    month: "long",
    day: "numeric"
 }

 console.log(newDate.toLocaleString('UTC',options));
 console.log(newDate.toDateString());

 