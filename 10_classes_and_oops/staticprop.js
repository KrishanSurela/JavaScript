class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `2334`;
  }
}

const krishan = new User("Krishan");
//console.log(krishan.createId()) static ko non statcic se access nhi kr skte hai

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const ipo = new User("Samsung", "samsung@phone");

ipo.logMe();

//console.log(ipo.createId()) static ko non statcic se access nhi kr skte hai
