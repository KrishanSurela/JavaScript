const coding = ["js","ruby","java","cpp","python"]

const values = coding.forEach( (item)=>{
    console.log(item); //js ruby java cpp python
})

console.log(values); //undefined

//return kuchh nhi krti forEach

const value = coding.forEach( (item)=>{
    console.log(item);
    return item
})

console.log(value); //undefined

//lekin kai bar hme array me se kuchh specific value chahiye hoti hai to forEach yaha panga kr rha hai return nhi kr pa rha hai to kya kre

// filter  => this also take callback function

const myNums = [1,2,3,4,5,6,7,8]

const newNum = myNums.filter( (num) => num > 4)//ye operation forEach me bhi hota hai lekin forEach values return nhi krta

console.log(newNum); //[ 5, 6, 7, 8 ]

//important : braces or scope start kr dete hai to return keyword likhna hi pdega like..

const newNum1  = myNums.filter( (item)=>{
    return item > 3
})

console.log(newNum1); //[ 4, 5, 6, 7, 8 ]

// condition in forEach

const newArray = []

myNums.forEach( (num)=> {
    if(num >3){
        newArray.push(num)
    }
})

console.log(newArray); //[ 4, 5, 6, 7, 8 ]

const books = [
    { title : 'Book One', genre : 'Fiction',publish : '1981',edition : '2004' },
    { title : 'Book Two',genre : 'Non-Fiction',publish : '1992',edition : '2008'},
    { title : 'Book Three',genre : 'History',publish : '1999',edition : '2000'},
    { title : 'Book Four',genre : 'Biology',publish : '1989',edition : '2003'},
    { title : 'Book Five',genre : 'History',publish : '1985',edition : '1999' },
    { title : 'Book Six',genre : 'Science',publish : '1983',edition : '2018' },
    { title : 'Book Seven',genre : 'Fiction',publish : '1975',edition : '2002' },
    { title : 'Book Eight',genre : 'English',publish : '1988',edition : '2014' }
]

let userBooks = books.filter( (bk) => bk.genre ==='Fiction')

userBooks = books.filter((bk) => {return bk.edition <=2005 && bk.genre==="History"})
console.log(userBooks);

