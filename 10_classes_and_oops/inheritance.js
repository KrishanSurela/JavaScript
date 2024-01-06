class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const Krishan = new Teacher("Krishan", "krishan@gmail.com", "123");

Krishan.addCourse();

const KrishanSurela = new User("Pramod");
KrishanSurela.logMe();
Krishan.logMe();

console.log(Krishan instanceof Teacher);
console.log(Krishan instanceof User);
console.log(KrishanSurela instanceof User);
console.log(KrishanSurela instanceof Teacher);

console.log(Krishan === Teacher);
