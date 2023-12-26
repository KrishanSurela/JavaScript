const myNumbers = [1 ,2 ,3 ,4 ,5 ,6 ,7]

const newNums = myNumbers.map( (num) => num+10)

const newNums1 = myNumbers.map( (num) => { return num+10})

myNumbers.forEach( (num) => { console.log(num+10);})
// 11
// 12
// 13
// 14
// 15
// 16
// 17

console.log(newNums);
    //   [
    //     11, 12, 13, 14,
    //     15, 16, 17
    //   ]
console.log(newNums1);
//   [
//     11, 12, 13, 14,
//     15, 16, 17
//   ]

//Interesting 


//###########  Channing  ###########


const newNum = myNumbers.map((num) => num*10 ).map( (num)=> num+1)

console.log(newNum);

// [
//     11, 21, 31, 41,
//     51, 61, 71
//   ]

const newNum1 = myNumbers.map((num) => num*10)
                         .map((num)=> num+1)
                         .filter((num)=> num>=40)

console.log(newNum1); //[ 41, 51, 61, 71 ]

//Reduce 

const myNumber = [1 ,2 ,3 ]

const myTotal = myNumber.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval :${currval}`);
    return acc+currval
},0)

console.log(myTotal);

// acc:0 and currval :1
// acc:1 and currval :2
// acc:3 and currval :3
// 6

const myTotal1 = myNumber.reduce( (acc,currval)=> acc+currval,0)

console.log(myTotal1)

const myTotal2 = myNumber.reduce( (acc,currval)=> {
    console.log(`acc:${acc} and currval :${currval}`);
    return acc+currval
},0)

console.log(myTotal2)

//for project purpose 

const shoppingCart =[
    {
        itemName: "JS-Course",
        price: 800
    },
    {
        itemName: "Py-Course",
        price: 1500
    },
    {
        itemName: "Java-Course",
        price: 2500
    },
    {
        itemName: "App Deve-Course",
        price: 8000
    },
    {
        itemName: "Web-Course",
        price: 3800
    }
]
   
const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(priceToPay);


