//ES6

class User {
    constructor(username,email,password){
        this.username =username;
        this.email =email;
        this.password =password
    }
 
    encryptPassword(){
        return `${this.password}ABC`
    }
    userUpperCase(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("Krishan","Krishan@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.userUpperCase());

//Behind The Scene

function UserOne(username,email,password){
    this.username =username;
    this.email =email;
    this.password =password
}

UserOne.prototype.encryptPassword=function(){
    return `${this.password}ABC`
}

UserOne.prototype.userUpperCase=function(){
    return `${this.username.toUpperCase()}`
}


const Uone = new UserOne("ZEE-One","One@gmail.com","1234")

console.log(Uone.encryptPassword());
console.log(Uone.userUpperCase());